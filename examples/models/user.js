/**
 * Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
 * eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
 * voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
 * clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
 * amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
 * nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
 * diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
 * Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
 * sit amet.
 *
 * @class User
 * @uses Foo
 * @uses Bar
 * @uses Baz
 * @extends DS.Model
 * @public
 */
export default DS.Model.extend({
  /**
   * The property foo. Description for property foo goes here.
   *
   * ```javascript
   * let foo = null
   * foo === undefined // false
   * ```
   *
   * @property foo
   * @type {String}
   * @default 'bar'
   * @public
   */
  foo: 'bar',

  /**
   * Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
   * eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
   * voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
   * clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
   * amet.
   *
   * Inline example:
   * ```javascript
   * let foo = 'bar'
   * let user = User.create({
   *   test: 'fooooooo'
   * })
   * user.sqrt(10) // results to 100
   * ```
   *
   * @method sqrt
   * @param {Number} x The base number
   * @return {Number} The square root
   * @static
   * @final
   * @public
  */
  sqrt(x) {
    return x * x
  },

  /**
   * Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
   * eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
   * voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
   * clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
   * amet.
   *
   * @example
   *     let foo = 0
   *     foo.toString()
   *
   *     this.doSomeWildThing(foo, 1, {})
   *
   * @method doSomeWildThing
   * @param {String} x Lorem ipsum dolor sit amet
   * @param {Number} factor Lorem ipsum dolor sit amet
   * @param {Object} options Lorem ipsum dolor sit amet
   * @throws {Error} Some weird stuff happened..
   * @public
   */
  doSomeWildThing() {
    return
  }
})
