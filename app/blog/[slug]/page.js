"use client"
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Client, Databases, ID, Query } from 'appwrite';
import Footer from "@/app/components/Footer";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('648b0e99608e158b28ac');



const BlogPage = ({ params }) => {
  const [blogPost, setBlogPost] = useState()

  const { slug } = params;

  useEffect(() => {
    document.title=blogPost?.title;
    
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648b104d7cbdca1d2121","648b105682c84bb999a0",
      [
        Query.equal('slug', slug)
      ]
    );

    promise.then(function (response) {
      // console.log(response);
      setBlogPost(response.documents[0]);
    }, function (error) {
      console.log(error);
    });
  }, [])

  
  document.title=blogPost?.title;

  return (
    <>
      <Head>
        <title>{blogPost?.title}</title>
        <meta name="description" content="Unbeliveable" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <img className="mb-4 w-96" src={blogPost?.image} alt="blogpost" />
        <h1 className="text-3xl font-bold mb-4">{blogPost?.title}</h1>
        <p className="text-lg" dangerouslySetInnerHTML={{__html:blogPost?.content}}></p>
      </div>
      <Footer/>
    </>
  )
}


export default BlogPage
