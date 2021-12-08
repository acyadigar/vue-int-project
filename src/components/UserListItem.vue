<script>
export default {
  props: ['user'],
}
</script>

<template>
  <li class="user">
    <span>
      <img :src="user.avatar">
      {{user.name}}
    </span>
    <span>{{user.createdAt.split('T')[0].replaceAll('-', '/')}}</span>
    <span>{{user.email}}</span>
    <span>{{user.phone}}</span>
  </li>
</template>

<style>

</style>