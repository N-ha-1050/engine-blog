import { NextPage } from 'next'
import React from 'react'

type Task = {
  id: number
  emoji: string
  title: string
  content: string
}

type Tasks = Task[]

const sampleTasks: Tasks = [
  {
    id: 1,
    emoji: '😄',
    title: 'はじめまして',
    content: 'はじめまして。私は〇〇大学の〇〇です。よろしくお願いします。',
  },
  {
    id: 2,
    emoji: '😄',
    title: 'はじめまして',
    content: 'はじめまして。私は〇〇大学の〇〇です。よろしくお願いします。',
  },
  {
    id: 3,
    emoji: '😄',
    title: 'はじめまして',
    content: 'はじめまして。私は〇〇大学の〇〇です。よろしくお願いします。',
  },
]

type EmojiPreviewProps = {
  emoji: string
}

const EmojiPreview: React.FC<EmojiPreviewProps> = ({ emoji }) => {
  return (
    <p className="aspect-square text-4xl p-4 rounded-lg bg-white">{emoji}</p>
  )
}

type TaskPreviewProps = {
  task: Task
}

const TaskPreview: React.FC<TaskPreviewProps> = ({ task }) => {
  return (
    // <div className="grid grid-cols-3 border-2 border-blue-400 rounded-lg p-2 m-2 duration-200 hover:border-blue-800">
    <div className="flex p-4 gap-4">
      <EmojiPreview emoji={task.emoji} />
      <div className="grid grid-rows-2">
        <b className="text-lg">{task.title}</b>
        <p className="truncate">{task.content}</p>
      </div>
    </div>
  )
}

type TasksPreviewProps = {
  tasks: Tasks
}
const TasksPreview: React.FC<TasksPreviewProps> = ({ tasks }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {tasks.map((task) => (
        <TaskPreview key={task.id} task={task} />
      ))}
    </div>
  )
}

const TaskList: NextPage = () => {
  return (
    <div className="bg-blue-50">
      <h1 className="text-4xl">Tasks</h1>
      <TasksPreview tasks={sampleTasks} />
    </div>
  )
}

export default TaskList
