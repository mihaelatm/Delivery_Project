import { goodsArray } from "@/constants/goods";
import { restArray } from "@/constants/rests";
import { reactive } from "vue";

export const store = reactive({
  isOpen: false,
  rests: restArray,
  goods: goodsArray,
  toggleModal(value) {
    this.isOpen = value;
  },
});
