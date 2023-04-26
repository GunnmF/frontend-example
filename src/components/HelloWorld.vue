<!--
 * @Description: 
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-13 17:44:26
 * @LastEditTime: 2023-04-25 19:08:47
 * @LastEditors: moumou.v1@foxmail.com
-->
<script setup lang="ts">
import { reactive, ref } from 'vue'
const text = ref('')
const form = reactive({
  user_name: 'user_name',
  code: '',
})
function c2() {
  fetch('/api/v1/user/code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: form.code, input1: form.user_name }),
  })
    .then((res) => res.json())
    .then((res) => {
      text.value = res
      console.log(res)
    })
}

const url = ref('/api/v1/user/code')
function c1() {
  url.value = '/api/v1/user/code?' + Math.random()
}
</script>

<template>
  <div
    :style="`display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      `">
    <h4>
      {{ text }}
    </h4>
    <div :style="`width: 200px;`">
      <el-input
        style="margin-bottom: 5px"
        v-model="form.user_name"
        placeholder="账号" />
      <el-input
        v-model="form.code"
        placeholder="验证码" />

      <div
        :style="`
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        `">
        <img
          @click="c1"
          :src="url"
          title="点击刷新"
          alt="点击刷新" />
        <el-button @click="c2">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
