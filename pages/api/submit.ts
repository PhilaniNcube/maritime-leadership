import mailchimp from '@mailchimp/mailchimp_marketing'
import type { NextApiRequest, NextApiResponse } from 'next'
import serviceRole from '../../utils/serviceRole';

mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
})

const listID = process.env.LIST_ID || ''


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

 const { first_name,
      last_name,
      designation,
      country,
      diet,
      email,
      id_number,
      organisation,
      gender,
      tel,} = req.body

    const { data, error } = await serviceRole.from('maritime_leadership_conference').insert([{ first_name,
      last_name,
      designation,
      country,
      diet,
      email,
      id_number,
      organisation,
      gender,
      tel}])

    console.log({data, error})


           const subscribingUser = { first_name,
      last_name,
      designation,
      country,
      diet,
      email,
      id_number,
      organisation,
      gender,
      tel}



  try {
    const response = await mailchimp.lists.addListMember(listID, {
      email_address: subscribingUser.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.first_name,
        LNAME: subscribingUser.last_name,
        PHONE: subscribingUser.tel,
        TITLE: subscribingUser.designation,
        COUNTRY: subscribingUser.country,
        DIET: subscribingUser.diet,
        IDNUM: subscribingUser.id_number,
        ORG: subscribingUser.organisation,
        GENDER: subscribingUser.gender,
      }

    })



    res.status(200).json({ response, data })
  } catch (error) {
    console.log(error)
    res.status(400).send({ error })
  }


}
