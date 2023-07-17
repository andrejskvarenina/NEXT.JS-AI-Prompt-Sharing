'use client'

import { useState, useEffect } from "react"
import { PostType } from "@types"
import PromptCard from "./prompt-card"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const PromptCardList = ({data, handleTagClick} : any) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post : PostType ) => {
        return (
          <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick} 
            />
        )
      })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([])

  const handleSearchChange = (e : any) => {
    setSearchText(e.target.value.toLowerCase())

    const filteredPosts = posts.filter((post : PostType ) => {
      const username = post.creator.username.toLowerCase();
      const tag = post.tag.toLowerCase();
      const prompt = post.prompt.toLowerCase();
      
      return username.includes(searchText) || tag.includes(searchText) || prompt.includes(searchText);
    });

    setDisplayedPosts(filteredPosts);
  }

  const handleTagClick = (tag : string) => {
    setSearchText(tag);

    const filteredPosts = posts.filter((post : PostType ) => {
        const postTag = post.tag.toLowerCase();

        return postTag.includes(tag.toLowerCase());
    });

    setDisplayedPosts(filteredPosts);
}



  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();

      setPosts(data);
      setDisplayedPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <div className="relative w-full flex-center">
        <input 
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        className="search_input peer"
        />

        <button 
          onClick={() => {
            setSearchText('')
            setDisplayedPosts(posts)
          }}
          className="absolute right-0 top-0 bottom-0 pr-3"
        >
          <CloseRoundedIcon />
        </button>
      </div>


    <PromptCardList 
      data={displayedPosts}
      handleTagClick={handleTagClick}
    />
    </section>
  )
}

export default Feed