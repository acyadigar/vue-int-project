<script>
import SideBar from "@/components/SideBar.vue";
import Users from "@/components/Users.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    Users
  },
};
</script>


<template>
  <div class="home">
    <SideBar />
    <Users currentRoute='Anasayfa'/>
  </div>
</template>