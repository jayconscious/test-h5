
<template>
    <div class="modal-view">
      <div class="show" @click="showToast">出来吧！</div>
      <!--  -->
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
                data: {
                    driverName: '曹师傅',
                    showAlert: true,
                    // 1 换队  2 时间到  3 踢出队员
                    showType: '1',
                    content: {
                        // 队伍的转换
                        '1': {
                        title: '是否转换队伍',
                        first: '您原来已有队伍，确定退出',
                        second: '并加入此队伍吗?'
                        },
                        // 时间过期
                        '2': {
                        title: '无法加入',
                        first: '抱歉，组队时间以截至，您',
                        second: '无法加入其它队伍'
                        },
                        // 踢出队员
                        '3': {
                        title: '踢出队员',
                        first: '您确定要把',
                        second: '踢出队伍吗？'
                        }
                    }
                }
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
