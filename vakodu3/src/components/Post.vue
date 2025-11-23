<template>
    <div class="post">
        <div class="post-header">
            <img src="/profile.png" :alt="post.author" class="avatar" />
            <div class="post-info">
                <h3>{{ post.author }}</h3>
                <p class="post-date">{{ post.date }}</p>
            </div>
        </div>
        <div class="post-content">
            <p>{{ post.content }}</p>
            <img v-if="post.image" :src="post.image" :alt="post.title" class="post-image" />
        </div>
        <div class="post-footer">
            <button class="like-btn" @click="likePost">
                👍 Like <span class="like-count">{{ post.likes }}</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostComponent',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        likePost() {
            this.$store.dispatch('incrementLikes', this.post.id)
        }
    }
}
</script>

<style scoped>
.post {
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.avatar {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
}

.post-info {
    flex: 1;
    margin-left: 10px;
    text-align: left;
}

.post-info h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
}

.post-date {
    font-size: 13px;
    color: #666;
    margin: 0;
}

.post-content {
    text-align: left;
}

.post-content p {
    margin: 0;
    color: #333;
    line-height: 1.5;
}

.post-image {
    width: 100%;
    border-radius: 6px;
    margin-top: 10px;
}

.post-footer {
    display: flex;
    align-items: center;
}

.like-btn {
    margin-top: 5px;
    color: #3b5998;
    cursor: pointer;
    align-self: flex-start;
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
}

.like-btn:hover {
    text-decoration: underline;
}

.like-count {
    font-weight: normal;
    margin-left: 5px;
}
</style>
