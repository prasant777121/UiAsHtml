import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPkToLocalStorage.js";

import { StartFunc as StartFuncFromLocalStorageOrderItemsToShow } from "../../../../../FromLocalStorage/OrderItemsToShow/Bulk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: jVarLocalBranchName
    });
    let jVarLocalDataNeeded = StartFuncFromLocalStorageOrderItemsToShow();

    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.CustomerData.CustomerMobile });

    jFLocalOrderAmount({ inData: jVarLocalDataNeeded.BodyData });

    jFLocalBranchNameId({ inOrderInfoCustomerBranchId: jVarLocalData.OrderData.BranchName });
    jFLocalToInputOrderDate({ inOrderDate: jVarLocalData.OrderData.Currentdateandtime });
    jFLocalOrderNumberId({ inOrderNumberId: inPk });
};

let jFLocalOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

let jFLocalOrderAmount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalOrderAmountId({ inOrderAmountId: sum });

};



let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inOrderInfoCustomerNameId;
};

let jFLocalBranchNameId = ({ inOrderInfoCustomerBranchId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalOrderInfoBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoBranchNameId.value = inOrderInfoCustomerBranchId;
};

let jFLocalToInputOrderDate = ({ inOrderDate }) => {
    let jVarLocalHtmlId = 'OrderDate';
    let jVarLocalOrderDate = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderDate.value = inOrderDate;
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.value = inOrderInfoCustomerMobileId;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};



export { StartFunc };