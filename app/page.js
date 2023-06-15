"use client"
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Client, Databases, ID } from 'appwrite';
import Footer from './components/Footer';
import Head from 'next/head';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('648b0e99608e158b28ac');



export default function Home() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    document.title="Home: The Hunting Coder";
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648b104d7cbdca1d2121","648b105682c84bb999a0",
      // [
      //   Query.equal('title', 'Avatar')
      // ]
    );

    promise.then(function (response) {
      // console.log(response);
      setblogPosts(response.documents);
    }, function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md">
              <img className='w-full h-48 object-cover rounded-t-lg' src={post.image} alt="" />
              <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-700">{post.metdesc}...</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    <Footer/>
    </>
  )
}
