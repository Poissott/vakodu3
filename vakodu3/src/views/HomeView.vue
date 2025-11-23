<template>
    <div class="home">
        <div class="sidebar"></div>
        <main class="home-content">
            <Post
                v-for="post in posts"
                :key="post.id"
                :post="post"
            />
            <button @click="resetLikes" class="reset-btn">Reset likes</button>
        </main>
        <div class="rightbar"></div>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        Post
    },
    computed: {
        ...mapGetters({
            posts: 'allPosts'
        })
    },
    methods: {
        ...mapActions(['resetAllLikes']),
        resetLikes() {
            this.resetAllLikes()
        }
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 20px;
    background: #f0f0f0;
}

.sidebar, .rightbar {
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.home-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.reset-btn {
    padding: 8px 16px;
    background: #004080;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-start;
}

.reset-btn:hover {
    opacity: 0.9;
}
</style>