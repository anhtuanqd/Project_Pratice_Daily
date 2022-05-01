class ReducerRegister {
     constructor() {
          this.reducers = {}
          this.emitChange = null
     }

     register(name, reducer) {
          this.reducers = { ...this.reducers, [name]: reducer }
          if (this.emitChange) {
               this.emitChange(this.reducers)
          }
     }

     setChangeListener(listener) {
          this.reducers = listener
     }
}

export default new ReducerRegister()
