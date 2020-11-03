app.component('modal', {
    methods: {
        hideModal() {
            hideModal();
        }
    },
    template: `
    <div class="modal fade" :class="{ 'show': player.modalOpen, 'modal-open': player.modalOpen, 'd-block': player.modalActive }" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{player.modalTitle}}</h5>
                    <button type="button" class="close" @click=hideModal()>
                    <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{{player.modalText}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade show" v-if="player.modalActive"></div>
    `
});