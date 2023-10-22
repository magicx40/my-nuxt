<script lang="ts" setup>

</script>

<template>
    <div class="default-layout">
        <div
            class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div class="max-w-8xl mx-auto">
                <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                    <div class="relative flex items-center">
                        <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                            <span class="sr-only">Tailwind CSS home page</span>
                            <img class="h-8" src="/logo.png" />
                        </a>
                        <div class="relative hidden lg:flex items-center ml-auto">
                            <nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                <ul class="flex space-x-8">
                                    <li><a class="hover:text-sky-500 dark:hover:text-sky-400"
                                            href="/docs/installation">Docs</a></li>
                                    <li><a href="https://tailwindui.com/?ref=top"
                                            class="hover:text-sky-500 dark:hover:text-sky-400">Components</a></li>
                                    <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/blog">Blog</a></li>
                                    <li><a class="hover:text-sky-500 dark:hover:text-sky-400" href="/showcase">Showcase</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="ml-auto -my-1 lg:hidden">
                            <button type="button"
                                class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                                <span class="sr-only">Navigation</span>
                                <svg width="24" height="24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div
                                style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <slot />
            </div>
        </div>
    </div>
</template>
