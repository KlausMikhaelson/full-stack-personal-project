import React from 'react'
import LoginButton from '../components/Login'
import LogoutButton from '../components/Logout'
import { useEffect } from 'react'
import {gapi} from "gapi-script"

const clientId = "515863593492-uf7lljvdrh4oh76qn2c9jt1jrosh1tnh.apps.googleusercontent.com";

const Homepage = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2', start);
  })
  return (
    <>
    <LoginButton />
    <LogoutButton />
    <h1>Hello Welcome to my Blog</h1>
    <p>Set in Kyoto 2027, the Japanese government has made plans to collect and preserve the city's natural architecture and culture through drones in real time, storing all its data in an infinite-capacity quantum computer known as Alltale. Naomi Katagaki is an indecisive high school student living in Kyoto who harbors a love for reading. One day after school, a mysterious yatagarasu steals his library book and in an attempt to get it back, he meets a strange man that appears out of nowhere. This man, whom only Naomi can see, is revealed to be himself from 10 years later, now grown up and an adult. The adult Naomi explains </p>
    <p>that he has accessed Alltale from the real world outside in order to change the recorded past and save Naomi's to-be girlfriend, his classmate Ruri Ichigyō, after she was unfortunately struck by lightning at a fireworks festival and rendered comatose. The teenag</p>
    </>
  )
}

export default Homepage