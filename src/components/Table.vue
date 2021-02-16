<template>
  <div class="flex justify-around m-10">
    <table class="table-fixed text-green-600 text-lg w-5/6">
      <thead>
        <tr class="text-left">
          <th class="w-1/12">#</th>
          <th class="w-1/6">姓名</th>
          <th class="w-3/12">电话</th>
          <th class="w-3/12">毕业学校</th>
          <th class="w-1/12">详情</th>
        </tr>
      </thead>
      <tbody v-for="from in froms" :key="from.id">
        <tr class="text-left shadow-inner">
          <td class="p-3">{{ from.id }}</td>
          <td class="p-3">{{ from.name }}</td>
          <td>{{ from.phone }}</td>
          <td>{{ from.graduationschool }}</td>
          <td>
            <router-link to="/">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      froms: [],
    };
  },
  async beforeCreate() {
    const res  = await axios.get("http://localhost:8080/users");
    this.froms = res.data.users
  },
}
</script>