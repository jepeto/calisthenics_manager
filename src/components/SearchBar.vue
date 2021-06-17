<template>
  <div class="p-0 items-center flex">
    <div class="h-8 bg-white flex items-center rounded-full shadow-xl">
      <input
        class="
          rounded-l-full
          w-full
          py-15
          px-4
          text-gray-700
          leading-tight
          focus:outline-none
        "
        id="search"
        type="text"
        placeholder="Search"
      />

      <div class="p-4">
        <button
          class="
            bg-black
            text-white
            rounded-full
            p-2
            hover:bg-indigo-400
            focus:outline-none
            w-12
            h-12
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
