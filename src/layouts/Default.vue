<template>
  <div class="layout">
    <header class="p-8 bg-blue-100 mb-8 shadow-md">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <main class="container mx-auto px-4 md:px-8">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
