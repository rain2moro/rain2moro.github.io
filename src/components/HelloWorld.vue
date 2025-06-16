<!--
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-05-28 14:29:47
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-10 14:30:33
-->
<template>
  <div class="form-container">
    <div v-if="!submitStatus|| submitStatus.type !== 'success'">
      <h2>用户信息表单</h2>
      <form @submit.prevent="handleSubmit" class="vue-form">
        <!-- 姓名输入 -->
        <div class="form-group">
          <label for="name">姓名：</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            @blur="validateField('name')"
            :class="{ 'is-invalid': errors.name }"
          />
          <span class="error-message" v-if="errors.name">{{
            errors.name
          }}</span>
        </div>

        <!-- 邮箱输入 -->
        <div class="form-group">
          <label for="email">邮箱：</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            @blur="validateField('email')"
            :class="{ 'is-invalid': errors.email }"
          />
          <span class="error-message" v-if="errors.email">{{
            errors.email
          }}</span>
        </div>

        <!-- 密码输入 -->
        <div class="form-group">
          <label for="password">密码：</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            @blur="validateField('password')"
            :class="{ 'is-invalid': errors.password }"
          />
          <span class="error-message" v-if="errors.password">{{
            errors.password
          }}</span>
        </div>

        <!-- 提交按钮 -->
        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          {{ isSubmitting ? '提交中...' : '提交表单' }}
        </button>

        <!-- 提交反馈 -->
        <div
          v-if="submitStatus"
          class="submit-feedback"
          :class="submitStatus.type"
        >
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
    <div v-else>
      <div class="submited">提交成功</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 表单数据
const formData = ref({
  name: '',
  email: '',
  password: '',
})

// 错误信息
const errors = ref({
  name: '',
  email: '',
  password: '',
})

// 提交状态
const submitStatus = ref(null)
const isSubmitting = ref(false)

// 字段验证规则
const validationRules = {
  name: (value) => {
    if (!value) return '姓名不能为空'
    if (value.length < 2) return '姓名至少2个字符'
    return ''
  },
  email: (value) => {
    if (!value) return '邮箱不能为空'
    if (!/^\S+@\S+\.\S+$/.test(value)) return '请输入有效的邮箱地址'
    return ''
  },
  password: (value) => {
    if (!value) return '密码不能为空'
    if (value.length < 6) return '密码至少6个字符'
    return ''
  },
}

// 验证单个字段
const validateField = (field) => {
  errors.value[field] = validationRules[field](formData.value[field])
}

// 验证整个表单
const validateForm = () => {
  let isValid = true
  Object.keys(formData.value).forEach((field) => {
    const error = validationRules[field](formData.value[field])
    errors.value[field] = error
    if (error) isValid = false
  })
  return isValid
}

// 提交表单
const handleSubmit = async () => {
  if (!validateForm()) {
    submitStatus.value = {
      type: 'error',
      message: '请正确填写所有字段',
    }
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // 模拟API调用
    await mockSubmitApi(formData.value)

    submitStatus.value = {
      type: 'success',
      message: '表单提交成功！',
    }

    // 清空表单
    Object.keys(formData.value).forEach((key) => {
      formData.value[key] = ''
    })
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: '提交失败：' + error.message,
    }
  } finally {
    isSubmitting.value = false
  }
}

// 模拟API提交
const mockSubmitApi = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟10%的失败率
      if (Math.random() < 0.1) {
        reject(new Error('服务器响应超时'))
      } else {
        console.log('提交数据：', data)
        resolve()
      }
    }, 1500)
  })
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input.is-invalid {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

.submit-btn {
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 80%;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #3367d6;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-feedback {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

.submit-feedback.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.submit-feedback.error {
  background-color: #f2dede;
  color: #a94442;
}
</style>
