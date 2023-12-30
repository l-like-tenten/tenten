import { create } from 'zustand';
import { createModalSlice } from './modalSlice';
import { createMyboardPageSlice } from './myboardPageSlice';
import { createAuthSlice } from './authSlice';
import { ModalState, myboardPageState, AuthState } from '@/lib/types/zustand';
// 공식문서
// SlicePattern: https://docs.pmnd.rs/zustand/guides/slices-pattern#slicing-the-store-into-smaller-stores
// TypeScript: https://docs.pmnd.rs/zustand/guides/typescript

type SliceType = ModalState & myboardPageState & AuthState;

export const useStore = create<SliceType>()((...a) => ({
  ...createModalSlice(...a),
  ...createMyboardPageSlice(...a),
  ...createAuthSlice(...a),
}));