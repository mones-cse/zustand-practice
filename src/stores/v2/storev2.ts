import { create } from "zustand";
import { TStoreV2 } from "../../types/v2/storeV2.type";
import { UserSliceV2 } from "./user-slice";
import { CardSliceV2 } from "./card-slice";
import { devtools, persist } from "zustand/middleware";

export const userStoreV2 = create<TStoreV2>()(
  devtools(
    persist(
      (...a) => ({
        ...UserSliceV2(...a),
        ...CardSliceV2(...a),
      }),
      {
        name: "user-store-v2",
      }
    )
  )
);
