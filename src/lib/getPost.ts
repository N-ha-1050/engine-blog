import fs from 'fs'
// import * as fs from 'node:fs'
import { Post } from './post'
import path from 'path'
import { test } from 'node:test'
// const fs = require('node:fs')
// const path = require('node:path')

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Test',
    content: 'test content',
    createdAt: '20230707',
  },
  {
    id: 2,
    title: 'Second',
    content: 'second content',
    createdAt: '20230709',
  },
]

type GetPosts = () => Post[]
type GetPost = (id: string) => Post
type GetPostsId = () => number[]

export const getPostsMock: GetPosts = () => samplePosts

export const getPostMock: GetPost = (id: string) => {
  const post = samplePosts.find((post) => post.id.toString() === id)
  if (!post) {
    throw new Error(`Could not find a post with id: ${id}`)
  }
  return post
}

export const getPosts: GetPosts = () => {
  const todayDate = new Date()
  const posts = fs
    .readdirSync('./contents')
    .filter(
      (file) =>
        fs.statSync(`./contents/${file}`).isFile() &&
        /[0-9]+_.+@[0-9]{4}-[0-9]+-[0-9]+\.md/.test(file)
    )
    .map((file) => {
      const text = fs.readFileSync(`./contents/${file}`, 'utf-8')
      const [id, title, createdAt, ..._] = file.split(/[_@.]/)
      const post: Post = {
        id: Number(id),
        createdAt: createdAt,
        title,
        content: text,
      }
      return post
    })
    .filter((post) => {
      const createdAtDate = new Date(post.createdAt)
      return createdAtDate.getTime() <= todayDate.getTime()
    })
    .sort((post1, post2) => post2.id - post1.id)
  return posts
}

export const getPost: GetPost = (id: string) => {
  const post = getPosts().find((post) => post.id.toString() === id)
  if (!post) {
    throw new Error(`Could not find a post with id: ${id}`)
  }
  return post
}

export const getPostsId: GetPostsId = () => {
  const postsId = getPosts().map((post) => post.id)
  return postsId
}
