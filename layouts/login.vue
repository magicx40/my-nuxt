<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const isLogin = ref(false)

const rememberMe = ref(false)

const checkEmail = (_rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('请输入邮箱'))
    } else if (value && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
        callback(new Error('请检查邮箱格式'))
    }
    callback()
}

const validateUser = (_rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('用输入用户名'))
    } else if (value && !/^[A-Za-z\u4e00-\u9fa5]{1,12}$/.test(value)) {
        callback(new Error('请检查用户名格式：连续的中英文字符，最大12个字符'))
    };
    callback()
}
const validatePass = (_rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('请输入密码'))
    } else if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(value)) {
        callback(new Error("请检查密码格式：8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '',
    password: '',
    email: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ required: true, validator: validateUser }],
    password: [{ required: true, validator: validatePass }],
    email: [{ required: true, validator: checkEmail }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        console.log(valid);
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const jumpToLogin = () => {
    resetForm(ruleFormRef.value);
    isLogin.value = true;
};

const jumpToRegistry = () => {
    resetForm(ruleFormRef.value);
    isLogin.value = false;
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<template>
    <div class="login-layout">
        <div class="login-wrapper">
            <div class="w-[50%] h-full absolute right-0 top-0 p-[15px]">
                <div class="login-header flex justify-center items-center mt-[20px]">
                    <img class="h-12" src="/buji-logo.png" alt="logo" />
                </div>
                <div class="login-form-wrapper">
                    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                        class="login-rules-form">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="ruleForm.username" />
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item v-if="!isLogin" label="邮箱" prop="email">
                            <el-input v-model="ruleForm.email" />
                        </el-form-item>
                        <el-form-item class="login-btn">
                            <el-button v-if="!isLogin" color="#626AEF" @click="submitForm(ruleFormRef)">注册</el-button>
                            <el-button v-else color="#626AEF" @click="submitForm(ruleFormRef)">登录</el-button>
                        </el-form-item>
                        <el-form-item class="jump-link">
                            <el-checkbox v-model="rememberMe" label="记住密码" />
                            <a v-if="!isLogin" class="jump-login" href="javascript:;" @click="jumpToLogin">已有账户，去登录</a>
                            <a v-else class="jump-registry" href="javascript:;" @click="jumpToRegistry">还没有账户，去注册一个</a>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login-layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #626aef;

    .login-wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 15px;
        border-radius: 10px;
        width: 800px;
        height: 450px;
        background-color: #FFFFFF;
        background-image: url('@/assets/imgs/bg1.svg');
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: 2% 50%;

        :deep(.el-form) {

            // padding-top: 20px;
            .el-form-item {
                flex-direction: column;

                .el-form-item__label {
                    justify-content: flex-start;
                    font-weight: bold;
                    color: #000000;
                }

                &.login-btn {
                    .el-form-item__content {
                        width: 100%;
                        line-height: 40px;
                        margin-left: 0px !important;

                        button {
                            width: 100%;
                            color: #FFFFFF;
                            height: 40px;
                        }
                    }
                }

                &.jump-link {
                    .el-form-item__content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-left: 0 !important;

                        .el-checkbox__input.is-checked+.el-checkbox__label {
                            color: #626AEF;
                        }

                        .el-checkbox__input.is-checked .el-checkbox__inner {
                            border-color: #626AEF;
                            background-color: #626AEF;
                        }

                        .el-checkbox__inner:hover {
                            border-color: #626AEF;
                        }
                    }

                    .el-checkbox {
                        color: #000000;

                        .el-checkbox__label {
                            font-weight: 400;
                        }
                    }
                }

                .jump-login,
                .jump-registry {

                    &:hover,
                    &:active {
                        color: #626AEF;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}</style>