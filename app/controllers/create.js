import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(changeset) {
      return changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          return changeset.save().then(() => {
            return this.transitionToRoute('index');
          }).catch((adapterError) => {
            alert('Error saving widget!');
            throw adapterError;
          });
        }
      });
    },

    cancel(changeset) {
      changeset.rollback();
      this.transitionToRoute('index');
    }
  }
});
