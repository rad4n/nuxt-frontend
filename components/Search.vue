<style>
    #container {
         margin-top:2%;
    }
    .input-group-text{
        background:none;
        border-right:none;  
    }
    .form-control{
        border-left:none;
    }
</style>
<template>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="col" id="search-location">
                                <label>Search Location</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <search-icon size="1.5x" class="custom-class"></search-icon>
                                        </div>
                                    </div>
                                    <input v-model="search.location" name="search" class="form-control" placeholder="Grogol" @change="toggle(todo)">
                                </div>
                            </div>
                            <div class="col">
                                <label>Check in</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <calendar-icon size="1.5x" class="custom-class"></calendar-icon>
                                        </div>
                                    </div>
                                    <input type="text" name="checkin" id="checkin" class="form-control" placeholder="24 January 2020">
                                </div>
                            </div>
                            <div class="col">
                                <label>Duration</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <select class="form-control" name="duration" id="duration">
                                        <option value="2 Months">2 Months</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <label>Additional</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <clock-icon size="1.5x" class="custom-class"></clock-icon>
                                        </div>
                                    </div>
                                    <select class="form-control" name="additional" id="additional">
                                        <option value="1 Days">2 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <label>Check out</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <calendar-icon size="1.5x" class="custom-class"></calendar-icon>
                                        </div>
                                    </div>
                                    <input type="text" name="checkout" id="checkout" class="form-control" placeholder="24 February 2020">
                                </div>
                            </div>
                            <div class="col">
                            <button @click="submit" class="btn btn-outline-danger">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
    import { SearchIcon,CalendarIcon,ClockIcon } from 'vue-feather-icons'
    import { mapMutations, mapActions, mapState } from 'vuex'
    import axios from 'axios'

    export default {
        data() {
            return {
                search: {
                    location: 'jakarta',
                }
            }
        },
        components: {
            SearchIcon,
            CalendarIcon,
            ClockIcon
        },
        // methods: {
        //     ...mapActions('index', ['storeSearchData']), //LOAD FUNGSI DARI MODULE SEARCH
        //     submit() {
        //         //DIMANA KITA MEMANGGIL FUNGSI UNTUK MENYIMPAN DATA YANG AKAN disearch DI ACTIONS DARI MODULE search
        //         //DAN KETIKA BERHASIL, MAKA AKAN PERBARUI list
        //         this.storeSearchData(this.search)
        //         // .then(
        //         //     () => {

        //         //     })
        //         //)
        //     }
        // }
    }

    
</script>