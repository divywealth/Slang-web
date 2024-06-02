<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #283d3f;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
