
<template>
    <div class="col-md-8">
    <div class="row">
      <div class="col-12 mt-5" v-for="item in posts" v-bind:key="item.id">
        <div class="card">
          <div class="card-body">
            <div class="row">
                <img class="col-4 img" :src="item.photos[1].photo"/>
                <div class="col-8">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">test</h6>
                    <p class="card-text">test</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary btn-more" @click="loadMore">Load More</button>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        methods : {
            loadMore () {
            this.posts = []
            this.current += 10
            this.allPost.map((item, key) => item.descriptions !== null && this.posts.length < this.current ? this.posts.push(item) : '')
            }
        },
        data () {
            return {
            allPost: [],
            posts: [],
            current: 10
            }
        },
        mounted () {
            axios('http://demo5096311.mockable.io/api/search?keyword=jakarta&start_date=2020-05-04&end_date=2020-06-04', {
            crossDomain: true
            }).then( ({ data }) => {
            this.allPost = data.data.building
            data.data.building.map((item, key) => {
                if (item.descriptions !== null && this.posts.length < 10) {
                    this.posts.push(item)
                }
            })
            console.log(this.posts);
            })
        }  
    }
</script>