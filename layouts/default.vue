<script lang="ts" setup>
const router = useRouter();
const menu = ref([
    {
        label: '首页',
        url: '/',
        icon: 'icon-shouye'
    },
    {
        label: '桌游圈',
        url: '/boardgame/community',
        icon: 'icon-pengyouquan'
    },
    {
        label: '创作桌游',
        url: '/boardgame/create',
        icon: 'icon-chuangzuo'
    },
    {
        label: '我的桌游',
        url: '/boardgame/my',
        icon: 'icon-wode'
    }
]);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleLoginClick = () => {
    router.push('/login');
};
</script>

<template>
    <div class="default-layout">
        <el-container>
            <el-aside class="flex flex-col justify-center items-stretch" width="200px">
                <div class="flex justify-center items-center h-12 grow-0 shrink-0">
                    <NuxtLink to="/">
                        <h1 class="hidden">布吉岛-桌游社</h1>
                        <img class="h-8" src="/buji-logo.png" />
                    </NuxtLink>
                </div>
                <el-menu :default-active="$route.path" router @open="handleOpen" @close="handleClose">
                    <el-menu-item v-for="menuItem in menu" :index="menuItem.url">
                        <i class="iconfont mr-2" :class="[`${menuItem.icon}`]" />
                        <span>{{ menuItem.label }}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="default-header-wrapper">
                        <el-button color="#626AEF" round @click="handleLoginClick">登录布吉岛</el-button>
                    </div>
                </el-header>
                <el-main>
                    <div class="default-content-wrapper">
                        <slot />
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
.default-layout {
    .el-container {
        .el-aside {
            height: 100vh;
            position: fixed;
            top: 0;
            border-right: 1px solid #dcdfe6;
            display: flex;

            .el-menu {
                flex: 1 1 auto;
                border-right: 0px;

                .el-menu-item {
                    height: 48px;
                    line-height: 48px;
                    color: #323232;

                    &:hover {
                        background-color: #f6f6f6;
                    }

                    &.is-active {
                        background-color: #eaecef;
                        color: #323232;
                    }
                }
            }
        }

        .el-container {
            margin-left: 200px;

            .el-header {
                height: 48px;
                border-bottom: 1px solid #dcdfe6;

                .default-header-wrapper {
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    button {
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
}
</style>