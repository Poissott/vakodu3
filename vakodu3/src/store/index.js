import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: 'Toomas',
        date: 'July 25, 2025',
        content: 'Does anyone want to join for a coffee break and discuss?',
        image: null,
        created_at: '2025-07-25T00:00:00Z',
        likes: 3,
        comments: []
      },
      {
        id: 2,
        author: 'Kati',
        date: 'July 30, 2025',
        content: 'Looking forward to the next group project!',
        image: null,
        created_at: '2025-07-30T00:00:00Z',
        likes: 4,
        comments: []
      },
      {
        id: 3,
        author: 'Toomas',
        date: 'August 10, 2025',
        content: 'Hello hello',
        image: null,
        created_at: '2025-08-10T00:00:00Z',
        likes: 1,
        comments: []
      },
      {
        id: 4,
        author: 'Eve',
        date: 'August 15, 2025',
        content: 'Check out this sunset!',
        image: 'sunset.jpg',
        created_at: '2025-08-15T00:00:00Z',
        likes: 10,
        comments: []
      },
      {
        id: 5,
        author: 'Mari',
        date: 'September 1, 2025',
        content: 'Happy new school year!',
        image: null,
        created_at: '2025-09-01T00:00:00Z',
        likes: 8,
        comments: []
      },
      {
        id: 6,
        author: 'Karl',
        date: 'September 7, 2025',
        content: 'I forgot my jacket inside the room 1007. Can someone help me get it back?',
        image: null,
        created_at: '2025-09-07T00:00:00Z',
        likes: 2,
        comments: []
      },
      {
        id: 7,
        author: 'Liis',
        date: 'September 15, 2025',
        content: 'Beautiful day in Pärnu.',
        image: 'parnu.jpg',
        created_at: '2025-09-15T00:00:00Z',
        likes: 5,
        comments: []
      },
      {
        id: 8,
        author: 'Jaan',
        date: 'September 25, 2025',
        content: 'Made something silly in the workshop',
        image: 'workshop.jpg',
        created_at: '2025-09-25T00:00:00Z',
        likes: 10,
        comments: []
      },
      {
        id: 9,
        author: 'Mati',
        date: 'October 2, 2025',
        content: 'Anyone knows in which room is the lab today?',
        image: null,
        created_at: '2025-10-02T00:00:00Z',
        likes: 3,
        comments: []
      },
      {
        id: 10,
        author: 'Anna',
        date: 'October 20, 2025',
        content: 'Went to the forest today!',
        image: 'forest.jpg',
        created_at: '2025-10-20T00:00:00Z',
        likes: 7,
        comments: []
      }
    ]
  },
  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  },
  mutations: {
    INCREMENT_LIKES(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes++
      }
    },
    RESET_ALL_LIKES(state) {
      state.posts.forEach(post => {
        post.likes = 0
      })
    }
  },
  actions: {
    incrementLikes({ commit }, postId) {
      commit('INCREMENT_LIKES', postId)
    },
    resetAllLikes({ commit }) {
      commit('RESET_ALL_LIKES')
    }
  }
})
