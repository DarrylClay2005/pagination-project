 // Sample data
        const items = Array.from({length: 50}, (_, i) => `Item ${i + 1}`);
        const itemsPerPage = 5;
        let currentPage = 1;

        function renderItems(page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const itemsToShow = items.slice(start, end);
            document.getElementById('items').innerHTML = itemsToShow.map(item => `<div>${item}</div>`).join('');
        }

        function renderPagination() {
            const pageCount = Math.ceil(items.length / itemsPerPage);
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            for (let i = 1; i <= pageCount; i++) {
                const li = document.createElement('li');
                li.className = i === currentPage ? 'active' : '';
                const btn = document.createElement('button');
                btn.textContent = i;
                btn.onclick = () => {
                    currentPage = i;
                    renderItems(currentPage);
                    renderPagination();
                };
                li.appendChild(btn);
                pagination.appendChild(li);
            }
        }

        renderItems(currentPage);
        renderPagination();