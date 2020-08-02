import { fetchData, fetchNewData} from '../../../../../unit/fetchData'

it ('fetchData 返回结果是 {success: true}', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done();
  })
})

// it ('fetchNewData 返回的结果是 404', () => {
//   // return fetchNewData().then((response) => {
//   //   expect(response.data).toEqual({
//   //     success: true
//   //   })
//   // })
//   expect.assertions(1); // 如果用catch一定要这个，表示expect至少要执行1次
//   return fetchNewData().catch((e) => {
//     expect(e.toString().indexOf('404')>-1).toBe(true); // 最后的结果一定存在404。
//   })
//   // 当失败的时候会进行一个catch ，而如果没有这个catch的话就是为真。
// }) 

// 当方法用作正确情况下的测试， 必须要在前面把这个promise返回 所以要添加return


// 成功的测试用例
// it ('fetchNewData 返回结果为 ｛success: true}', () => {
//   // 这里通过resolve 获取全部数据
//   // toMatchObject 表示数据中是否包含一部分数据
//   // fetchNewData().then(res => { console.log(res)});
//   return expect(fetchNewData()).resolves.toMatchObject({
//     // resolves 取到最后的值，然后用toMatchObject去匹配
//     data: {
//       success: true
//     }
//   }) 
// })
 

// it ('fetchData 返回结果为 { success: true }', async () => {
//   await expect(fetchNewData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// 失败的测试用例
// it ('fetchNewData 返回结果为 404', async () => {
//   await expect (fetchNewData()).rejects.toThrow();
// })


// it ('fetchData 返回结果为 { success: true }', async () => {
//   const response = await fetchNewData();
//   expect(response.data).toEqual({
//     success: true
//   })
// })

// 失败的测试用例
it ('fetchNewData 返回结果为 404', async () => {
  expect.assertions(1) 
  try {
    await fetchNewData();
  } catch (e) {
    console.log(e.toString());
    expect(e.toString()).toEqual('Error: Request failed with status code 404')
  }
})