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

  const createNewID = () => {
      const maxId = posts.length > 0
      ? Math.max(...posts.map(post => post.id))
      : 0
      return maxId + 1;
  }

  let posts = [
    {
      id: 1,
      titleofpost: "First Forest",
      username: "Matilda",
      summary: "Forests are the dominant terrestrial ecosystem of Earth, and are distributed around the globe.",
      image: "/static/images/cards/forest1.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 2,
      titleofpost: "Second Forest",
      username: "Matilda",
      summary: "Forests account for 75% of the gross primary production of the Earth's biosphere, and contain 80% of the Earth's plant biomass.",
      image: "/static/images/cards/forest2.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 3,
      titleofpost: "Third Forest",
      username: "Matilda",
      summary: "Net primary production is estimated at 21.9 gigatonnes carbon per year for tropical forests, 8.1 for temperate forests, and 2.6 for boreal forests.",
      image: "/static/images/cards/forest3.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },
    {
      id: 4,
      titleofpost: "Fourth Forest",
      username: "Matilda",
      summary: "Forests at different latitudes and elevations form distinctly different ecozones.",
      image: "/static/images/cards/forest4.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    },

    {
      id: 5,
      titleofpost: "Fifth Forest",
      username: "Matilda",
      summary: "Boreal forests around the poles, tropical forests around the Equator, and temperate forests at the middle latitudes.",
      image: "/static/images/cards/forest5.jpg",
      imagetitle: "Forest with a dark background",
      verifiedSource: false,
      date: new Date()
    }, 

    {
      id: 6,
      titleofpost: "Sixth Forest",
      username: "Matilda",
      summary: "Higher elevation areas tend to support forests similar to those at higher latitudes, and amount of precipitation also affects forest composition.",
      image: "/static/images/cards/forest6.jpg",
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
      id: createNewID(),
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