
/**
 * credit: https://github.com/type-challenges/type-challenges/issues/737
 * refer: https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md
 * refer: https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type
 * refer: https://catchts.com/union-array
 */

/**
 * UnionToIntersection<{ foo: string } | { bar: string }> =
 *  { foo: string } & { bar: string }.
 */
export type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never

/**
 * LastInUnion<1 | 2> = 2.
 */
export type LastInUnion<U> = UnionToIntersection<
U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never

/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]
