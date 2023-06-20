import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { setUsers, setFailure } from "./allUsers.reducer";
import { useGet } from "@/app/config/api/useCrud";
import { IUser } from "@/entities/user/model/interfaces/user";

interface axiosProps {
  url: string;
  method?: string;
  data?: string;
}

export function* fetchUsers() {
  try {
    const result: AxiosResponse<IUser> = yield call(() =>
      useGet("https://jsonplaceholder.typicode.com/users")
    );
    yield put(setUsers(result.data));
  } catch (e: any) {
    yield put(setFailure(e.message));
    /*  yield put({ type: "TODO_FETCH_FAILED" }); */
  }
}

export function* watchFetchUsers() {
  yield takeEvery("FETCH_USERS", fetchUsers);
}
