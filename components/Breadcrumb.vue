<style>
    .breadcrumb{
        background:none;
    }
   .breadcrumb-item + .breadcrumb-item::before {
        content: "";
    }
    .breadcrumb-item a{
        color:#f05147;
    }
</style>
<template>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a><chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon></li>
                <li class="breadcrumb-item"><a href="#">Library</a><chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
</template>
<script>
    import { ChevronRightIcon } from 'vue-feather-icons'

    export default {
        components: {
            ChevronRightIcon
        }
    }
</script>