document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const firstPageBtn = document.getElementById('firstPageBtn');
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const lastPageBtn = document.getElementById('lastPageBtn');
    const currentPageInfo = document.getElementById('currentPageInfo');

    const data = [
        { patientId: 'P001', gender: 'Male', age: 35, testPerformed: 'Blood Test' },
        { patientId: 'P002', gender: 'Female', age: 28, testPerformed: 'X-ray' },
        { patientId: 'P003', gender: 'Male', age: 42, testPerformed: 'MRI Scan' },
        { patientId: 'P004', gender: 'Female', age: 31, testPerformed: 'Ultrasound' },
        { patientId: 'P005', gender: 'Male', age: 50, testPerformed: 'ECG' },
        { patientId: 'P006', gender: 'Female', age: 45, testPerformed: 'CT Scan' },
        { patientId: 'P007', gender: 'Male', age: 22, testPerformed: 'Blood Test' },
        { patientId: 'P008', gender: 'Male', age: 38, testPerformed: 'X-ray' },
        { patientId: 'P009', gender: 'Female', age: 27, testPerformed: 'MRI Scan' },
        { patientId: 'P010', gender: 'Male', age: 60, testPerformed: 'Ultrasound' },
        { patientId: 'P011', gender: 'Female', age: 40, testPerformed: 'ECG' },
        { patientId: 'P012', gender: 'Male', age: 55, testPerformed: 'CT Scan' },
        { patientId: 'P013', gender: 'Male', age: 33, testPerformed: 'Blood Test' },
        { patientId: 'P014', gender: 'Female', age: 29, testPerformed: 'X-ray' },
        { patientId: 'P015', gender: 'Male', age: 48, testPerformed: 'MRI Scan' },
        { patientId: 'P016', gender: 'Female', age: 36, testPerformed: 'Ultrasound' },
        { patientId: 'P017', gender: 'Male', age: 25, testPerformed: 'ECG' },
        { patientId: 'P018', gender: 'Female', age: 50, testPerformed: 'CT Scan' },
        { patientId: 'P019', gender: 'Male', age: 39, testPerformed: 'Blood Test' },
        { patientId: 'P020', gender: 'Male', age: 30, testPerformed: 'X-ray' },
        { patientId: 'P021', gender: 'Female', age: 32, testPerformed: 'MRI Scan' },
        { patientId: 'P022', gender: 'Male', age: 45, testPerformed: 'Ultrasound' },
        { patientId: 'P023', gender: 'Female', age: 55, testPerformed: 'ECG' },
        { patientId: 'P024', gender: 'Male', age: 44, testPerformed: 'CT Scan' },
        { patientId: 'P025', gender: 'Male', age: 37, testPerformed: 'Blood Test' },
        { patientId: 'P026', gender: 'Female', age: 35, testPerformed: 'X-ray' },
        { patientId: 'P027', gender: 'Male', age: 29, testPerformed: 'MRI Scan' },
        { patientId: 'P028', gender: 'Female', age: 41, testPerformed: 'Ultrasound' },
        { patientId: 'P029', gender: 'Male', age: 56, testPerformed: 'ECG' },
        //{ patientId: 'P030', gender: 'Female', age: 47, testPerformed: 'CT Scan' }
    ];

    const itemsPerPage = 10;
    let currentPage = 1;

    function displayData(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, data.length);
        const paginatedData = data.slice(startIndex, endIndex);

        tbody.innerHTML = '';

        paginatedData.forEach(item => {
            const row = `
                <tr>
                    <td>${item.patientId}</td>
                    <td>${item.gender}</td>
                    <td>${item.age}</td>
                    <td>${item.testPerformed}</td>
                    <td>
                        <div class "actions">
                        <button class "view-more" onclick="viewMore('${item.patientId}')">
                            <i class="fa fa-eye blue" aria-hidden="true"></i>
                        </button>
                        <button class "view-more" onclick="viewMore('${item.patientId}')">
                            <i class="fa fa-print green" aria-hidden="true"></i>
                        </button>
                        <button class "view-more" onclick="viewMore('${item.patientId}')">
                            <i class="fa fa-download gold" aria-hidden="true"></i>
                        </button>
                        <button class "view-more" onclick="viewMore('${item.patientId}')">
                            <i class="fa fa-trash red" aria-hidden="true"></i>
                        </button>
                        </div>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        });

        updatePaginationInfo(startIndex, endIndex, data.length);
        updatePaginationButtons();
    }

    function updatePaginationInfo(startIndex, endIndex, totalItems) {
        currentPageInfo.textContent = `${startIndex + 1}-${endIndex} of ${totalItems}`;
    }

    function updatePaginationButtons() {
        firstPageBtn.disabled = currentPage === 1;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === Math.ceil(data.length / itemsPerPage);
        lastPageBtn.disabled = currentPage === Math.ceil(data.length / itemsPerPage);
    }

    firstPageBtn.addEventListener('click', function () {
        if (currentPage !== 1) {
            currentPage = 1;
            displayData(currentPage);
        }
    });

    prevPageBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayData(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', function () {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            currentPage++;
            displayData(currentPage);
        }
    });

    lastPageBtn.addEventListener('click', function () {
        if (currentPage !== Math.ceil(data.length / itemsPerPage)) {
            currentPage = Math.ceil(data.length / itemsPerPage);
            displayData(currentPage);
        }
    });

    function viewMore(patientId) {
        // Your view more functionality here
        console.log('View more clicked for patient ID:', patientId);
    }

    // Initial display
    displayData(currentPage);
});
