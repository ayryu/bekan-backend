  const express = require('express')
  const app = express()

  const cors = require('cors')

  app.use(express.json())
  app.use(cors())
  app.use(express.static('build'))

  let banner = {
    image: "/static/images/cards/dark-forest.jpg",
    category: "Forests"
  }

  let posts = [
    {
      id: 0,
      titleofpost: "Forest0",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 1,
      titleofpost: "Forest1",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 2,
      titleofpost: "Forest2",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },
    {
      id: 3,
      titleofpost: "Forest3",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 4,
      titleofpost: "Forest4",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    }, 

    {
      id: 5,
      titleofpost: "Forest5",
      username: "Matilda",
      summary: "Dark mode using nature as a backdrop",
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    }
  ]

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/api/posts', (req, res) => {
    res.json({
      banner: banner,
      posts:posts
    })
  })

  app.get('/api/posts/:id', (request, response) => {
    const id = Number(request.params.id)
    const post = posts.find(post => post.id === id)

    if (post) {
      response.json(post)
    } else {
      response.status(404).end()
    }
  })

  app.post('/api/posts', (request, response) => {
    const postData = request.body

    const post = {
      titleofpost: postData.title,
      summary: postData.content,
      id: postData.id,
      image: "/static/images/cards/dark-forest.jpg",
      imagetitle: "Forest with a dark background",
    }

    posts = posts.concat(post);
    
    if (post) {
      response.json(post)
    } else {
      response.status(404).end()
    }
    })

  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })