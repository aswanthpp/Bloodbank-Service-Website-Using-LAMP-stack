<style type="text/css">
    .redborder { border : 1px solid red !important;}


    .ajax-file-upload-statusbar{
        width: 100% !important;
        margin-top: 2px;
        border: none !important;
        border-radius: 0px;
    }
    .ajax-file-upload-progress {
        width:100%;
        border: none;
        border-radius: 0px;
        margin-top: 1px !important;
        position: relative;
        display: block;
    }
    .ajax-file-upload-bar{
        background-color: orange;
        height: 1px;
        border-radius: 0px;
    }
    .ajax-file-upload-filename{
        margin-top: 1px !important;
        margin-bottom: -4px !important;
    }
    .ajax-file-upload-green{
        border-radius: 0px;
        padding: 2px 10px !important;
        text-shadow: 0;
        position: relative;
        top: -30px;
        float: right;
    }
    .ajax-upload-dragdrop{
        padding: 0px !important;
        width: auto !important;
        border: 1px solid #3B9FF3 !important;
    }
    .ajax-file-upload{
        padding: 4px !important;
        font-size: 14px !important;
        font-weight: normal !important;
        background-color: #3B9FF3 !important;
        border-radius: 0px !important;
        box-shadow: none !important;
        margin-right: 4px !important;
        padding-bottom: 0px !important;
    }
    .ajax-file-upload:hover{
        background-color: #3E90D4 !important;
    }.ajax-file-upload-filename, .ajax-file-upload-red,
    .ajax-file-upload-abort, .ajax-file-upload-green{
        display: none !important;
    }
    .ajax-file-upload-error{
        color: #CF4762;
    }
</style>
<div class="modal fade smart-form"
     ng-controller="historyController" id="historyJourney"
     style="height: 100vh;margin: auto; margin-top: 3%;" tabindex="-1"
     role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:1000px">
        <div class="modal-content" style="height: 517px;">
            <div class="modal-header" style="padding:
                 8px;background-color: #222;">
                <button type="button" class="close"
                        data-dismiss="modal" style="margin: 4px;color: #aaa;opacity: .6"
                        aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel"
                    style="margin-left: 0px;color: #aaa"><i class="fa fa-history"></i> History</h4>
            </div>
            <div class="padding-10 col col-md-12" >
                <div class=" col col-md-4 callbtnaction" style="height:450px;overflow-y: auto">
                    <table style="width: 100%;">
                        <tr  ng-repeat="journey in Attachments" style="margin:5px;background-color:#aaa ;cursor: pointer ;border:1px solid #ddd; padding:8px;" ng-click="displayFile(journey.file_name)">
                            <td class="col col-md-8">{{journey.file_name |limitTo:20}}<span ng-show="journey.file_name.length >20">..</span></td>
                            <td class="col col-md-4" >{{journey.created_date}}</td>
                        </tr>
                    </table>
                </div>
                <div class="col col-md-8" id="ShowImageInDiv" style="height:450px;overflow-y: auto">
                </div>
            </div>
        </div>
    </div>
</div>



