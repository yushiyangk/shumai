import * as sm from '@shumai/shumai'

const a = sm.full([5, 5], 1).triu().index([':', '0:2'])
console.log(a.dtype, a.shape, a.toFloat32Array())

//const t = sm.full([2, 3], 1).requireGrad()
//const m = t.mean([0], true)
//const a = m.matmul(sm.full([3, 1], 10))
//const b = a.mul(sm.scalar(2))
//b.backward()
//console.log(b.grad.shape)
//console.log(a.grad.shape)
//console.log(m.grad.shape)
//console.log(t.grad.shape)
//console.log(b.grad.toFloat32Array())
//console.log(a.grad.toFloat32Array())
//console.log(m.grad.toFloat32Array())
//console.log(t.grad.toFloat32Array())

////console.log(sm.scalar(1).add(sm.full([3, 3], 0)).toFloat32Array())

//const u = sm.tensor(new Float32Array([0, 1, 2, 3, 4, 5])).reshape([2, 3]).requireGrad()
////const c = sm.concatenate([u, t], 0)
//console.log(c.shape)
//console.log(c.toFloat32Array())
//const m = c.mean()
//console.log(m.toFloat32())
//c.backward()
////console.log(c.grad)

//const tensors = [sm.full([3, 2], 0).requireGrad(), sm.full([3, 2], 1).requireGrad()]
//const g = sm.concatenate(tensors, 0).mean()
//const gb = g.backward()

//const c = tensors[0].add(tensors[1]).mean([0])
//const cb = c.backward()
//console.log(g.shape)
//console.log(g.toFloat32Array())

//console.log(t.toFloat32Array())
//console.log(t.mean().toFloat32Array())
//console.log(t.mean().shape)
//console.log(t.index([0, '1:3']).toFloat32Array())

//let k = sm.rand([5, 2, 3]).matmul(sm.rand([5, 3, 2]))
//console.log(k.shape)
//console.log(k.toFloat32Array())

//let g = sm.tensor(new Float32Array([new Float32Array([2, 3])]))
