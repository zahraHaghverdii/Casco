// import { Edit_user, Get_user } from "@/api/fetching_api";
// import { promises } from "dns";
// import { create } from "zustand";

// type Inputs = {
//   username?: string;
//   phone?: string;
//   password?: string;
//   email?: string;
// };

// type User = {
//   id?: number;
//   username?: string;
//   password?: string;
//   phone?: string;
//   email?: string;
//   wishes?: string[];
//   car?: string[];
// };
// //-----------------------------------------------------------------------------------login
// type Data_inputs = {
//   inputs: Inputs;
//   sign_in_up: "In" | "Up";
//   fn_ch_signIn_Up: (set: "In" | "Up") => void;
//   fn_giveDataInputs: (data: Partial<Inputs>) => void;
//   fn_reset: () => void;
// };

// export const useInputsDataStore = create<Data_inputs>((set) => ({
//   sign_in_up: "In",
//   inputs: {},
//   fn_giveDataInputs: (data) =>
//     set((prev) => ({ inputs: { ...prev.inputs, ...data } })),
//   fn_ch_signIn_Up: (state) => set({ sign_in_up: state }),
//   fn_reset: () => set({ inputs: {} }),
// }));
// //--------------------------------------------------------------------------------------------user
// type UsersJson = {
//   users: User[];
//   user: User;
//   massgeLogin: string;
//   fetch_user: () => Promise<void>;
//   find_user: (state: User) => void;
//   fn_ch_massgeLogin: (state: string) => void;
//   fn_giveDataInputs: (data: {}) => void;
//   edit_user: (obj: {}) => void;
// };
// export const useFetchUserStore = create<UsersJson>((set) => ({
//   users: [],
//   user: {},
//   massgeLogin: "0",
//   fetch_user: async () => {
//     const data = await Get_user();
//     set({ users: data });
//   },
//   fn_ch_massgeLogin(state) {
//     set({ massgeLogin: state });
//   },
//   find_user: (state) => {
//     set({ user: state });
//   },
//   fn_giveDataInputs: (data) =>
//     set((prev) => ({ user: { ...prev.user, ...data } })),

//   edit_user: (user) => {
//     Edit_user(user);
//   },
// }));
// //-----------------------------------------------------------------------------------accont
// type AccontItem = {
//   component: string;
//   fn_string: (state: string) => void;
// };
// export const useAccontStore = create<AccontItem>((set) => ({
//   component: "information",
//   fn_string: (state) => set({ component: state }),
// }));
