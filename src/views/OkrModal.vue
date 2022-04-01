<template>
  <div class="okrModal">
    <button
      class="px-6 py-4 font-sans font-semibold text-white bg-pink-500 rounded shadow-lg outline-none hover:bg-pink-300 active:outline-none focus:outline-none"
      @click="toggleModal = !toggleModal"
    >
      Open modal
    </button>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
      v-if="toggleModal"
    >
      <div class="relative w-auto max-w-2xl mx-auto">
        <div class="flex flex-col w-full bg-white rounded shadow-2xl">
          <div class="text-2xl font-bold">My modal</div>
          <span
            >Lệnh bán sàn chất đống khiến mới chỉ 15 phút đầu tiên của đợt khớp
            lệnh xác định giá mở cửa (ATO), FLC đã dư bán sàn hơn 34 triệu cổ
            phiếu; ROS dư bán sàn hơn 27 triệu cổ phiếu; KLF dư bán sàn gần 9
            triệu cổ phiếu; HAI dư bán sàn hơn 3,9 triệu cổ phiếu; AMD dư bán
            sàn gần 5 triệu cổ phiếu và ART cũng dư bán sàn gần 3,7 triệu cổ
            phiếu.</span
          >
          <button
            class="px-6 py-2 m-auto mt-1 mb-3 text-white bg-green-500 rounded w-/4"
            @click="toggleModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 bg-black opacity-25"
    ></div>
  </div>
</template>

<script>
export default {
  name: "OkrModal",
  data() {
    return {
      toggleModal: false,
    };
  },
};
</script>
