
<template>
    <div class="modal-view">
      <div class="show" @click="showToast">弹窗</div>
    </div>
</template>

<script>
import MessageBox from '../components/Tip/index'
import Toast from '../components/Toast/index'
import Dialog from '../components/Dialog/index'

export default {
    props: {

    },
    components: {
    },
    data() {
        return {
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        showToast () {
            // MessageBox({
            //     data: {
            //         showAlert: true
            //     }
            // })
            Dialog({
                showAlert: true,
                showType: '1',
                title: '无法加入',
                first: '抱歉，组队时间以截至，您',
                second: '无法加入其它队伍',
                cancelBtnText: '取消',
                confirmBtnText: '确认'
            }, () => {
                console.log('this is callback')
            })
        }
    }
};
</script>

<style scoped lang="scss">
    .modal-view {
        width: 100%;
        height: 100%;
        background: pink;
    }
</style>
