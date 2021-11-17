<template>
    <div>
        <div class="currentCity">当前城市</div>
        <div class="currentCity-city"><div>{{data}}</div></div>
    </div>
</template>
<script>
export default {
    props:['data'],
}
</script>