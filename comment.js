
        function newCol(value) {
            var element = document.createElement("td")
            element.innerHTML = value
            return element
        }

        function newRow(name, comment, review) {
			// tambahkan tr baru dan td baru
			var tr = document.createElement("tr")
			tr.appendChild(newCol(name))
			td = document.createElement("td")
			tr.appendChild(newCol(comment))
			td = document.createElement("td")
			tr.appendChild(newCol(review))

            // tambahkan tombol
            td = document.createElement("td")
            var edit = document.createElement("button")
            edit.setAttribute("class", "btn btn-default")
            edit.innerHTML = "Edit"
            td.appendChild(edit)
            edit.onclick = function() { editData(tr) }

            var hapus = document.createElement("button")
            hapus.innerHTML = "<span><a class='glyphicon glyphicon-trash' aria-hidden='true'></a></span>  "
            
            hapus.setAttribute("class", "btn btn-default")
            td.appendChild(hapus)

            hapus.onclick = function() { hapusData(tr) }


            tr.appendChild(td)

            return tr
        }

        function hapusData(element) {
            if (confirm("Are You Sure ?"))
                element.remove()
        }

        function resetForm() {
            document.querySelector("form").reset()
            document.querySelector("#btnUpdate").style.display = "none"
            document.querySelector("#name").focus()
        }

        function editData(element) {
			var name = document.querySelector("#name")
			var comment = document.querySelector("#comment")
			var review = document.querySelector('#review')

            children = element.querySelectorAll("td")
            name.value = children[0].innerHTML
            comment.value = children[1].innerHTML
            review.value = children[2].innerHTML

            name.focus()

            var btnUpdate = document.querySelector("#btnUpdate")
            btnUpdate.style.display = "inline"
            btnUpdate.onclick = function() { updateData(element) }
        }

        function updateData(element) {
			var name = document.querySelector("#name").value
			var comment = document.querySelector("#comment").value
			var review = document.querySelector('#review').value

            tr = newRow(name, comment, review)

            table = document.querySelector("#Comment-List")
			table.querySelector("tbody").replaceChild(tr, element)

            resetForm()
        }

		function tambahData() {
			// baca input
			var name = document.querySelector("#name").value
			var comment = document.querySelector("#comment").value
			var review = document.querySelector('#review').value

            tr = newRow(name, comment, review)
			
			// insert ke table
			var table = document.querySelector("#Comment-List")
			table.querySelector("tbody").appendChild(tr)

            resetForm()
		}
	
    