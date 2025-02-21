<template>
<div class="bg-gray-50 flex flex-col min-h-screen overflow-x-hidden">
    <Header />
    <main class="mx-auto flex-1">
        <slot />
    </main>
    <Footer />
</div>
</template>