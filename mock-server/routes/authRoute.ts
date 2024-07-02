import express from 'express'
import Auth from '../../domain/Auth/Auth'

const authRoute = express.Router()

authRoute.post<Auth>('/', (req, res, next) => {
  ;(async () => {
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    const response: Auth = {
      user: { id: 1, name: 'User name', email: 'test@test.com' },
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyYjQxYjBlYjVlMzNkYTM5YWQwMTQ3NzhlZDA3M2E0YTNhYmY2ZjVlZGQwZmE5MDc2ZjNiNTQwNzVmZThlY2YwMGZlMzY2MmE5OWE1NmFiIn0.eyJhdWQiOiIxIiwianRpIjoiMzJiNDFiMGViNWUzM2RhMzlhZDAxNDc3OGVkMDczYTRhM2FiZjZmNWVkZDBmYTkwNzZmM2I1NDA3NWZlOGVjZjAwZmUzNjYyYTk5YTU2YWIiLCJpYXQiOjE2NjAyMDcwNzgsIm5iZiI6MTY2MDIwNzA3OCwiZXhwIjoxNjkxNzQzMDc4LCJzdWIiOiIxIiwic2NvcGVzIjpbImFkbWluIl19.ERo2WATx1giKz1yHglFwE9uZ6HHEDyzZ5nOxpDctUMgapufyXXNByjyZJEgynAJ3VtM6a4jfupU9UcEL1KOgvjfJ4cypeQ0_x3cpxhn76xkXRa86bs9ZOECRmZLHHZA7ecX6XiRhddlHUljAh4PVCxkuEo0cX1SXLczh1X3O5V4t8oEKTnTMttX4HKGdrX86b3Vk0iuK6dzAkDan3gwZaN-NdKON8s4AjnV7p1tP9_ZzpT3tyWQ2qtr2gqXiAJjhjpoWOvsdjn8tbi09D8fBs1dob3tq_u4XWhjmd8zx98qTW_NKW3FvX-4AcmgTmeMgkl7MDaUb8qlkaxgYfI7wL1TpKVLDfenFrYxy_5xl9O-tdlKhYHT-s0x_B6laj8t0Z1wweebNwZHYO2LIozTE0SP5NOxNBqiu1ZMjAx3YIlHepDhVE1af1gbAWbJ-kVC5gzPwRyNw3Q1kk3szNVc8tsSYSeQec5Gz9YoYMddb19scBu11TdavXs65vakFKt_06WiImwp_lq9V2wMWzEr8g6uGKT4p8fGPU_MBbFnDx_jTNLdf9or5xGhneivAGtgguooBuLkIzoXz_EVT_Sb89U0ktLw24_W3qmVFui86kHJILw8Tsn6ZQM4vDOA-zNJyfuvzi34JbRtOassrM0hxe6uQcbetY3d5G-cP5-c9IEU',
      accessToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzdmMWNkYWFjNTQxMmVmMTc4YjljOGEzYTdmZTMxNzNlZjJhZWU3NWU3ZTkxNzE5MjU2NTlkNzllNWJlYTdhZjM3MDAwNjAxMmQ0Yzk3NmMiLCJpYXQiOjE2NTUxMDI5NjkuNjI0MTE5LCJuYmYiOjE2NTUxMDI5NjkuNjI0MTIyLCJleHAiOjE2ODY2Mzg5NjkuNjE4NjMxLCJzdWIiOiI4MSIsInNjb3BlcyI6W119.HPQRiWZAaPlI3TzmThutUe0lk_TZIpf8gIT-qdceJ8DSLqwkVfrHVPCThW2akUlD4OBNgHc0flmmwpV_ECMyWSxc9WyyI6GtoyYqcSh8Wyb4fhfMjc1xTu9TI-_IKb1BqnzSzk9N03hUF-I0Sa4-6ywCHBQHMwjqvHTmpcDF7qrO51DM6y4inRaH7V5KToBo7nlMJoJNdjeXGF5U9magR6uNvPeU-V5qhuH1T7e9kXFOHS-vDueIB2X2PNy3bV3GSkBcZqZi-oDdY_ClWtlIYW8MfRGmhyXj5LKo5PHgdWgzyOBuHyOv6HdIKjSOFD2wDEmsj9Eklc5zX00FIVFFrpOe8FQa7AEa-b7IHQtQNMZR6I3IKz_GdRfmZPFAIDU-ZyGKU2tPIAMkQFGvBe_IFxVh6SzVS-U-l8T9x7DP-Ro_IrvDDel5zsJ1cSyLHIsAk5oqhGrNRoUlEiWWX1PQbm3K_DpEk_VHZozanVjZjUAwMYiunqrUyyq_8lLesOcz8MSgxNmBX8jNgIarkkbUBOeNVCerGz3-YcQxFYgwE69GSjHq3OxZb2kCkAfY9E4YxT-NQBZcWgBtjjAa9u3ZYT0SnBPfjRou6_dLT7Q6ETNimV-gDBjZkmTDYtNSNaAAqiATjbbWkLHuJaxpRryKEib5WZgduoeSjzlMF28An2s',
    }
    res.status(200)
    res.setHeader(
      'Set-Cookie',
      'accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyYjQxYjBlYjVlMzNkYTM5YWQwMTQ3NzhlZDA3M2E0YTNhYmY2ZjVlZGQwZmE5MDc2ZjNiNTQwNzVmZThlY2YwMGZlMzY2MmE5OWE1NmFiIn0;HttpOnly;Path=/;Expires=' +
        expiryDate.toUTCString()
    )
    res.json(response)
  })().catch(next)
})

export { authRoute }
