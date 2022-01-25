import React, { useEffect } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailCheck, setEmailCheck] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState('')
  const [thankText, setThankText] = React.useState('')


  useEffect(() => {
    if (emailCheck !== '') {
      validateEmail()
    }
  }, [emailCheck, email])

  const handleName = (e) => {
    setName(e.target.value)
  }

  const validateEmail = () => {
    let val = String(emailCheck)
      .toLowerCase()
      .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

    if (val === null) {
      setErrorMsg('Email Is Required')
    } else {
      setEmail(val[0])
    }
  }

  const handleEmail = (e) => {
    setErrorMsg('')
    setEmailCheck(e.target.value)
  }


  const handleMessage = (e) => {
    setMessage(e.target.value)
  }


  const handleSubmitData = () => {
    const uri = process.env.AT_URL
    const key = process.env.AT_API_KEY

    let messageBody = `{
      "records" :[
        {
          "fields": {
            "Name":  "${name}",
            "Email":  "${email}",
            "Message": "${message}"
          }
        }
      ]
    }`

    axios.post(uri, messageBody, { headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' } }).then(
      (response) => {
        if (response.data.records.length > 0) {
          setThankText('Message sent.')
        }
      }
    );

  }

  const handleSumbitSlack = () => {

    const uri = process.env.SLACK_API_URL


    const messageBody = {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `This new message from ${name}\n>Email is :  ${email} \n> Message is : ${message}`
          }
        }
      ]
    }

    axios.post(
      uri, JSON.stringify(messageBody), {
      withCredentials: false,
    })

  }

  const handleSubmit = () => {

    if (email !== '') {
      handleSubmitData()
      handleSumbitSlack()
    }

  }

  return (

    <Layout>
      <Seo title="Contact" />
      <div className="min-h-screen flex justify-center items-center ">
        <div className="w-6/12 mx-auto grid grid-cols-4 gap-2 bg-indigo-100 p-4 rounded-md">
          <div className="col-span-4 p-2">
            <div className='text-base font-light text-gray-800 my-1'> Name </div>
            <input type="text" name="name" id="name" className="w-10/12 rounded-md mx-1 p-1" onChange={handleName} />
          </div>
          <div className="col-span-4 p-2">
            <div className='text-base font-light text-gray-800 my-1'>Email</div>
            <input type="email" name="email" id="email" className="w-10/12 rounded-md mx-1 p-1" onChange={handleEmail} />
          </div>
          <div className="col-span-4 p-2">
            <div className='text-base font-light text-gray-800 my-1'>Message</div>
            <textarea name="message" id="message" rows="5" className="w-10/12 rounded-md mx-1 p-1" onChange={handleMessage} />
          </div>
          <div className="col-span-4 p-2">
            <div className='text-base font-light text-red-600 my-1'>{errorMsg}</div>
          </div>
          <div className="col-span-4 p-2 flex justify-end w-10/12">
            <div className="mx-2">
              <button type="submit" onClick={handleSubmit} className="bg-indigo-800 text-white px-3 py-1 rounded drop-shadow-md hover:bg-indigo-500 active:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300	">Send</button>
            </div>
          </div>
          <div className="col-span-4 p-2">
            <div className='text-base font-bold text-indigo-900 my-1'>{thankText}</div>
          </div>

        </div>
      </div>

    </Layout >
  )
}


export default Contact
