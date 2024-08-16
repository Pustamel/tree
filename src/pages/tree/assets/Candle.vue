<script
  setup
  lang="ts"
>

interface Props {
  color?: string,
  size?: string | number,
  fillColor?: string
}

withDefaults(defineProps<Props>(), {
  color: 'black',
  size: '10',
  fillColor: 'none'
})

</script>

<template>
  <svg
    :height="size"
    viewBox="0 0 8 20"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M1 19H7V10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9H2C1.73478 9 1.48043 9.10536 1.29289 9.29289C1.10536 9.48043 1 9.73478 1 10V19ZM4 1L5.465 2.638C5.72642 2.91903 5.90145 3.26935 5.9692 3.64715C6.03695 4.02495 5.99456 4.41426 5.84709 4.76862C5.69962 5.12298 5.45329 5.42742 5.13752 5.64561C4.82174 5.86379 4.44985 5.98651 4.06624 5.99911C3.68262 6.0117 3.30349 5.91365 2.97408 5.71665C2.64467 5.51964 2.37891 5.23202 2.20851 4.88809C2.03811 4.54417 1.97027 4.15848 2.01309 3.77705C2.05591 3.39563 2.20758 3.03458 2.45 2.737L4 1Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>