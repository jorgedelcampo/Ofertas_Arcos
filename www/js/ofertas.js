// JavaScript Document

var app = {
	
	checkUser: function(){
				
		var usuario = JSON.parse(localStorage.getItem('usuario'));
		var empresas = [];
		empresas.push(JSON.parse(localStorage.getItem('empresas')));
		var empresa = [];
		empresa = JSON.parse(localStorage.getItem('empresa'));
		var ofertas = [];
		ofertas = JSON.parse(localStorage.getItem('ofertas'));
		var tipoOferta = [];
		tipoOferta.push(JSON.parse(localStorage.getItem('tipoOferta')));		
		var escuelas = JSON.parse(localStorage.getItem('escuelas'));
		
		var login = localStorage.getItem('login');
		
		if (login) {
			checkMore = false;
			checkMenu = false;
			checkOnOff = false;
		
			if(!usuario) {
				app.getDataUser();
				} // end if(!usuario)
			
			if(usuario && !empresa) {
								
				document.body.innerHTML = '<div id="loading"></div><div class="container" id="container"><header><div id="menu"><p>&#9776</p></div></header><div id="main_section"><div id="no_empresas"><p>Registra tu empresa para comenzar a publicar anuncios</p><p id="reg_empresa">+</p></div></div><!--<div class="more" id="more"><p></p></div>--></div><div id="container_sleep"></div><div id="sidebar"></div><div id="chat"></div><div id="page_menu" class="container"><header><div id="menu"><p>X</p></div></header><div id="main_section"><div id="container_menu" class="container_menu"><div id="thumb"><!--<span></span>--><p></p></div><div id="user_name"><p></p></div><!--<p id="notificaciones">Notificaciones</p>--><p id="mis_datos">Cuenta</p><p id="logout">Salir</p><!--<img class="brand" src="img/logo_arcos_white.png" width="120" height="auto" />--></div><div id="edit_container_menu"></div></div></div><!--<div id="menu_more" class="menu_more"></div>--><div id="float_dialog"><div></div></div>';

				document.querySelector('#thumb p').innerHTML = usuario.nom_usuario.charAt(0);
				document.getElementById('user_name').innerHTML = usuario.nom_usuario + ' ' + usuario.ap_pat_usuario;
				document.getElementById('thumb').addEventListener('click', function(){ app.listaEmpresas() });
				
				app.inicio();
			}
						
			if(usuario && empresa) {

				document.body.innerHTML = '<div id="loading"></div><div class="container" id="container"><header><div id="menu"><p>&#9776</p></div></header><div id="main_section"><div id="empresa"><p>' + empresa.nom_empresa + '</p></div><div id="lista_ofertas"><ul></ul></div></div><div class="more" id="more"><p></p></div></div><div id="container_sleep"></div><div id="sidebar"></div><div id="chat"></div><div id="page_menu" class="container"><header><div id="menu"><p>X</p></div></header><div id="main_section"><div id="empresa"><p>' + empresa.nom_empresa + '</p></div><!--<div id="menu">x</div>--><div id="container_menu" class="container_menu"><div id="thumb"><span></span><p></p></div><div id="user_name"><p></p></div><!--<p id="notificaciones">Notificaciones</p>--><p id="mis_datos">Cuenta</p><p id="logout">Salir</p><!--<img class="brand" src="img/logo_arcos_white.png" width="120" height="auto" />--></div><div id="edit_container_menu"></div></div></div><div id="menu_more" class="menu_more"></div><div id="float_dialog"><div></div></div>';
				
				document.querySelector('#empresa').addEventListener('click', function(){
					app.listaEmpresas();
					});
				
				document.querySelector('#thumb span').innerHTML = usuario.nom_usuario.charAt(0);
				document.querySelector('#thumb p').innerHTML = empresa.nom_empresa.charAt(0);
				document.getElementById('user_name').innerHTML = usuario.nom_usuario + ' ' + usuario.ap_pat_usuario;
				document.getElementById('thumb').addEventListener('click', function(){ app.listaEmpresas() });
							
				var tipoOferta = JSON.parse(localStorage.getItem('tipoOferta'));
				var menuMore = document.getElementById('menu_more');
				menuMore.innerHTML = '<span class="section_title">Ingresar nueva oferta</span><div><form name="index" id="anadir_oferta"><p>Título oferta</p><input type="text" name="titulo_oferta" id="titulo_oferta" placeholder="Director de arte en práctica..."><p>Tipo de oferta</p><select name="tipo_oferta" id="tipo_oferta"><option selected disabled>Selecciona una opción</option></select><div id="area_inicio_oferta"><p>Fecha de inicio</p><input type="date" name="inicio_oferta" id="inicio_oferta" placeholder="Fecha de inicio"></div><div id="area_fin_oferta"><p>Fecha de término</p><input type="date" name="fin_oferta" id="fin_oferta" placeholder="Fecha de término"></div><p>Descripción anuncio</p><textarea type="text" name="descripcion_oferta" placeholder="Importante empresa del rubro..." rows="6" id="descripcion_oferta"></textarea><p>Requisitos de postulación</p><textarea type="text" name="requisitos_oferta" placeholder="Uno por línea" id="requisitos_oferta" rows="6"></textarea><p>Sueldo</p><input type="number" name="sueldo_oferta" placeholder="800.000" id="sueldo_oferta"><p>Cupos</p><input type="number" name="cupos_oferta" id="cupos_oferta" min="1" /><p>Dirigido a</p><select name="escuela" id="escuelas"></select><input type="submit" name="crear_oferta" value="Crear" id="crear_oferta"><input type="reset" value="Cancelar" id="cancelar"></form>';
				
				var formElements = document.querySelectorAll('#anadir_oferta *');
				for (var i = 0; i < formElements.length; i++) {
					formElements[i].addEventListener('keydown', function(e) {
						if (e.which === 38 || e.which === 40) {
							e.preventDefault();
							} // end if
						}); // end function
					} // end for
				
				//} // end if usuario
			
			var tipo_oferta = document.getElementById('tipo_oferta');
			for(var i=0; i<tipoOferta.length; i++){
					tipo_oferta.innerHTML += '<option value="' + tipoOferta[i].tipo_oferta + '">' + tipoOferta[i].tipo_oferta + '</option>';
					}
			
			var listaEscuelas = document.getElementById('escuelas');
			listaEscuelas.innerHTML = '<option selected disabled>Selecciona una escuela</option>';
			for(var i=0; i<escuelas.length; i++){
					listaEscuelas.innerHTML += '<option value="' + escuelas[i].ESC_ID + '">' + escuelas[i].ESC_NOM.toLowerCase().charAt(0).toUpperCase() + escuelas[i].ESC_NOM.toLowerCase().slice(1) + '</option>';
					} // end for

			
			app.inicio();
		}
			} // end if (usuario)
			
		else {
			document.body.innerHTML = '<div id="loading"></div><div class="container" id="container"><header></header><div id="main_section"><div id="login"><p id="signin">Iniciar sesión</p><p id="signup">Registrarse</p><div id="link">arcos.cl</div></div><div id="login_form" style="display: none"></div></div></div><div id="float_dialog"></div>';
			document.body.classList.remove('body_down');
			
			document.getElementById('signin').addEventListener('click', function() {app.signin()} );
			document.getElementById('signup').addEventListener('click', function() {app.signup()} );
			
			} // end if else(usuario)
		
		var misDatos = document.getElementById('mis_datos');
		if(misDatos){
			misDatos.addEventListener('click', function(){ app.misDatos(); });
			}
		
		},
	
	misDatos: function(){
		
		var usuario = [];
		usuario = JSON.parse(localStorage.getItem('usuario'));
		
		document.getElementById('container_menu').style.display = 'none';
		document.getElementById('edit_container_menu').style.display = '';
		document.getElementById('edit_container_menu').innerHTML = '<div><span class="section_title">Datos usuario</span><form id="edit_datos_usuario" name="edit_datos_usuario" class="disabled_form"><p>Nombre</p><input type="text" value="' + usuario.nom_usuario + '" id="nom_usuario" /><p>Apellido paterno</p><input type="text" value="' + usuario.ap_pat_usuario + '" id="ap_pat_usuario" /><p>Apellido materno</p><input type="text" value="' + usuario.ap_mat_usuario + '" id="ap_mat_usuario" /><p>Mail usuario</p><input type="text" value="' + usuario.mail_usuario + '" id="mail_usuario" /><p>Teléfono</p><input type="text" value="' + usuario.tel_usuario + '" id="tel_usuario" /></form><form id="edit_pass"></form><p id="cambiar_datos">Editar datos</p><p id="cambiar_pass">Cambiar contraseña</p><span class="section_title">Mis empresas</span><div id="tus_empresas"><ul id="mis_empresas"></ul></div></div><p id="back_datos">Volver</p>';

		var inputDatosUsuario = document.querySelectorAll('#edit_datos_usuario > *');
		for(var i = 0 ; i < inputDatosUsuario.length ; i++){
			inputDatosUsuario[i].disabled = true;
		} // end for

		document.getElementById('edit_datos_usuario').classList.remove('disabled_datos_usuario');
		
		document.getElementById('back_datos').addEventListener('click', function(){
			document.getElementById('container_menu').style.display = '';
			document.getElementById('edit_container_menu').style.display = 'none';
			document.getElementById('edit_container_menu').innerHTML = '';
			});
		
		var empresas = [];
		empresas = JSON.parse(localStorage.getItem('empresas'));
		if(empresas) {
			for(var i=0; i<empresas.length; i++) {
				document.getElementById('mis_empresas').innerHTML += '<li><p class="burbuja" id="' + empresas[i].id_empresa + '">' + empresas[i].nom_empresa.charAt(0) + '</p><p id="nombre_empresa">' + empresas[i].nom_empresa + '</p></li>';
				} // end for
			var burbuja = document.getElementsByClassName('burbuja');
			for(var i=0; i< burbuja.length; i++) {
				burbuja[i].addEventListener('click', function(){
					var idE = this.getAttribute('id');
					app.mostrarEmpresa(idE);
					});
				} // end for
			} // end if empresas
		if(empresas.length <= 3 || !empresas) {
			var li = document.createElement('li');
			li.setAttribute('id', 'anadirE');
			li.innerHTML = '<p id="burbuja_mas">+</p><p id="nombre_empresa">Añadir</p>';
			document.getElementById('mis_empresas').appendChild(li);
			var burbujaMas = document.getElementById('burbuja_mas');
			burbujaMas.addEventListener('click', this.regEmpresa, false);
			}	
		
		document.getElementById('cambiar_datos').addEventListener('click', function() { app.checkPass('cambiarDatos') });
		document.getElementById('cambiar_pass').addEventListener('click', function() { app.checkPass('cambiarPass') });
		
		},
	
	
	
	mostrarEmpresa: function(idE) {
		var estado = 0;
		var nom_empresa;
		empresas = JSON.parse(localStorage.getItem('empresas'));
		if(empresas) {
			for(var i=0; i<empresas.length; i++) {
				if(empresas[i].id_empresa == idE){
					nom_empresa = empresas[i].nom_empresa;
					var floatDialog = document.getElementById('float_dialog');
					floatDialog.classList.add('esperar_confirmacion');
					floatDialog.innerHTML = '<div><form id="detalles_empresa" class="clic_section"><p>Nombre empresa</p><input type="text" value="' + nom_empresa + '" disabled><input type="submit" value="Aceptar" /><input type="reset" value="Remover" /></form></div>';
					if(floatDialog.classList.contains('esperar_confirmacion')) {
						floatDialog.addEventListener('click', function(e){
							if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
								app.offDialog();
								} // end if
							}); // end function
						} // end if(floatDialog)
					var detallesEmpresa = document.getElementById('detalles_empresa');
					detallesEmpresa.addEventListener('submit', function(e){
						e.preventDefault();
						if(estado == 0) {
							app.offDialog();
							estado = 1;
							} // end if
						});
					detallesEmpresa.addEventListener('reset', function(e){
						detallesEmpresa.innerHTML = '<p>¿Confirmas que desas remover ' + nom_empresa + ' de tu listado?</p><input type="submit" value="Aceptar" /><input type="reset" value="Cancelar" />';
						detallesEmpresa.addEventListener('submit', function(e){
							e.preventDefault();
							if(estado == 1) {
								floatDialog.classList.add('esperar_confirmacion');
								app.removerEmpresa(idE);
								estado = 0;
								}
							});
						detallesEmpresa.addEventListener('reset', function(e){
							app.mostrarEmpresa(idE);
							});
						});
					
					}
				}
			} // if empresas
		},
	
	
	
	removerEmpresa: function(idE){
		var floatDialog = document.getElementById('float_dialog');
		var detallesEmpresa = document.getElementById('detalles_empresa');
		var usuario = JSON.parse(localStorage.getItem('usuario'));
		var idUsuario = usuario.id_usuario;
		var idEmpresa = idE;
		var url = 'https://www.arcos.cl/app_test4/admin/user/datos_usuario.php';
		var dataPass = { 'id_usuario' : idUsuario , 'id_empresa' : idEmpresa, 'sesion_key' : localStorage.getItem('sesion_key') , 'remover_empresa' : true }
		app.sendPost(url, dataPass, function(res){
			if(res.status == 1){ // éxito
				var classStatus = 'success';
				detallesEmpresa.innerHTML = '<div class="' + classStatus + '"></div><p>' + res.msg + '</p><input type="submit" value="Aceptar" />';
				detallesEmpresa.addEventListener('submit', function(e){
					e.preventDefault();
					app.getDataUser();
					});
			}
			else{ // error
				var classStatus = 'error';
				detallesEmpresa.innerHTML = '<div class="' + classStatus + '"></div><p>' + res.msg + '</p><input type="submit" value="Aceptar" />';
				detallesEmpresa.addEventListener('submit', function(e){
					e.preventDefault();
					app.offDialog();
					});
				}
			});
		},
	


	checkPass: function(req){
		var rut_usuario = localStorage.getItem('rut_usuario');
		var dv_usuario = localStorage.getItem('dv_usuario');

		var floatDialog = document.getElementById('float_dialog');
		floatDialog.classList.add('esperar_confirmacion');
		var floatDialog = document.getElementById('float_dialog');
		if(floatDialog.classList.contains('esperar_confirmacion')) {
			floatDialog.addEventListener('click', function(e){
				if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
					app.offDialog();
					} // end if
				}); // end function
		} // end if(floatDialog)
		floatDialog.innerHTML = '<div><div><form id="check_pass" class="clic_section"><p class="title">Confirma tu contraseña</p><input type="password" id="pass_usuario" autofocus /><input type="submit" value="Enviar" /><input type="reset" value="Cancelar" /></form></div></div>';
		var CheckPass = document.getElementById('check_pass');
		CheckPass.addEventListener('reset', function(){
			app.offDialog();
		});
		CheckPass.addEventListener('submit', function(e){
			e.preventDefault();
			var msgForm = document.getElementsByClassName('msg_form');
			if(msgForm) {
				for(var i = 0; i < msgForm.length; i++){
					msgForm[i].remove();
					}
				}
			var url = 'https://www.arcos.cl/app_test4/admin/user/pass_usuario.php';
			var dataPass = { 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario ,'pass_usuario' : document.querySelector('#check_pass #pass_usuario').value , 'sesion_key' : localStorage.getItem('sesion_key') , 'check_pass' : true }
			app.sendPost(url, dataPass, function(res){
				if(res.status == 1 && req == 'cambiarDatos'){
					app.cambiarDatos();
				}
				if(res.status == 1 && req == 'cambiarPass'){
					app.cambiarPass();
				}
				else{
					var msg = document.createElement('p');
					msg.innerHTML = res.msg;
					msg.classList.add('msg_form');
					CheckPass.appendChild(msg);
					var loading = document.getElementById('loading');
					loading.innerHTML = '';
					loading.classList.remove('loading_active');
					}
			});
		});
	},
	
	
	getPass: function(){
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.innerHTML = '<div><form id="form_get_pass" class="clic_section"><p class="title">Recuperar contraseña</p><p>Rut usuario</p><input id="rut_usuario" type="tel"><input type="submit" value="Enviar"><input type="reset" value="Cancelar"></form></div>';
		floatDialog.classList.add('esperar_confirmacion');
	
		var floatDialog = document.getElementById('float_dialog');
		if(floatDialog.classList.contains('esperar_confirmacion')) {
			floatDialog.addEventListener('click', function(e){
				if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
					app.offDialog();
					} // end if
				}); // end function
		} // end if(floatDialog)
		
		var rut_usuario;
		var dv_usuario;
		
		document.getElementById('form_get_pass').addEventListener('reset', function() {
			app.offDialog();
		});
		
		document.querySelector('#form_get_pass #rut_usuario').addEventListener('blur', function(){
			if(this.value != '') {
				rut_usuario = document.querySelector('#form_get_pass #rut_usuario').value;
				dv_usuario = rut_usuario.slice(-1);
				rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
				rut_usuario = rut_usuario.match(/\d+/g).join('');
				document.querySelector('#form_get_pass #rut_usuario').value = rut_usuario + '-' + dv_usuario;
				}
			}); // end function
						
		document.getElementById('form_get_pass').addEventListener('submit', function(e) {
			e.preventDefault();
			var loading = document.getElementById('loading');
			loading.classList.add('loading_active');
			rut_usuario = document.querySelector('#form_get_pass #rut_usuario').value;
			dv_usuario = rut_usuario.slice(-1);
			rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
			rut_usuario = rut_usuario.match(/\d+/g).join('');
			document.querySelector('#form_get_pass #rut_usuario').value = rut_usuario + '-' + dv_usuario;
			var dataPass = { 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario , 'sesion_key' : localStorage.getItem('sesion_key') , 'get_pass' : true }
			var url = 'https://www.arcos.cl/app_test4/admin/user/pass_usuario.php';
			app.sendPost(url, dataPass, function(res){
				if(res.status == 1){
					var classStatus = 'success';
					} // end if
				else{
					var classStatus = 'error';
					} // end if
				loading.classList.remove('loading_active');
				floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="' + classStatus + '"></div><p style="text-align:center; color: #fff; font-size: small;">' + res.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></div></form>';
				floatDialog.classList.add('esperar_confirmacion');
				var floatDialog = document.getElementById('float_dialog');
				if(floatDialog.classList.contains('esperar_confirmacion')) {
					floatDialog.addEventListener('click', function(e){
						if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
							app.offDialog();
							} // end if
						}); // end function
				} // end if(floatDialog)
				document.getElementById('ok_datos').addEventListener('click', function(){
					app.checkUser();
					}); // end function
				}); // end sendPost
			}); // end submit
		},

	
	cambiarDatos: function(){
		var inputDatosUsuario = document.querySelectorAll('#edit_datos_usuario > *');
		var rut_usuario = localStorage.getItem('rut_usuario');
		var dv_usuario = localStorage.getItem('dv_usuario');
		var loading = document.getElementById('loading');
		loading.classList.remove('loading_active');
		var floatDialog = document.getElementById('float_dialog');
		app.offDialog();
		document.getElementById('edit_datos_usuario').innerHTML += '<input type="submit" value="Enviar" /><input type="reset" value="Cancelar" />';
		document.querySelector('#edit_datos_usuario > #nom_usuario').focus();
		var inputDatosUsuario = document.querySelectorAll('#edit_datos_usuario > *');
		for(var i = 0 ; i < inputDatosUsuario.length ; i++){
			inputDatosUsuario[i].disabled = false;
		} // end for
		document.getElementById('edit_datos_usuario').classList.remove('disabled_form');
		document.getElementById('edit_datos_usuario').addEventListener('reset', function(e){
			document.querySelector('#edit_datos_usuario input[type="submit"]').parentNode.removeChild(document.querySelector('#edit_datos_usuario input[type="submit"]'));
			
			document.querySelector('#edit_datos_usuario input[type="reset"]').parentNode.removeChild(document.querySelector('#edit_datos_usuario input[type="reset"]'));
			
			document.getElementById('edit_datos_usuario').classList.add('disabled_form');
			
			for(var i = 0 ; i < inputDatosUsuario.length ; i++){
				inputDatosUsuario[i].disabled = true;
			} // end for
		}); // end reset
		document.getElementById('edit_datos_usuario').addEventListener('submit', function(e){
			e.preventDefault();
			loading.classList.add('loading_active');
			var dataUsuario = { 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario ,'nom_usuario' : document.querySelector('#edit_datos_usuario > #nom_usuario').value , 'ap_pat_usuario' : document.querySelector('#edit_datos_usuario > #ap_pat_usuario').value , 'ap_mat_usuario' : document.querySelector('#edit_datos_usuario > #ap_mat_usuario').value , 'mail_usuario' : document.querySelector('#edit_datos_usuario > #mail_usuario').value , 'tel_usuario' : document.querySelector('#edit_datos_usuario > #tel_usuario').value , 'sesion_key' : localStorage.getItem('sesion_key') , 'editar_usuario' : true }
			var url = 'https://www.arcos.cl/app_test4/admin/user/datos_usuario.php';
			app.sendPost(url, dataUsuario, function(res){
				if(res.status == 1){
					var classStatus = 'success';
				} // end if
				if(res.status == 2){
					var classStatus = 'error';
				} // end if
				loading.classList.remove('loading_active');
				var floatDialog = document.getElementById('float_dialog');
				floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="' + classStatus + '"></div><p style="text-align:center; color: #fff; font-size: small;">' + res.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></div></form>';
				floatDialog.classList.add('esperar_confirmacion');
				if(floatDialog.classList.contains('esperar_confirmacion')) {
					floatDialog.addEventListener('click', function(e){
						if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
							app.offDialog();
							} // end if
						}); // end function
				} // end if(floatDialog)
				document.getElementById('ok_datos').addEventListener('click', function(){
					app.getDataUser();
				}); // end function
			}); // end sendPost
		}); // end function
	},


	cambiarPass: function(){
		var id_usuario = JSON.parse(localStorage.getItem('usuario')).id_usuario;
		var rut_usuario = JSON.parse(localStorage.getItem('usuario')).rut_usuario;
		var dv_usuario = JSON.parse(localStorage.getItem('usuario')).dv_usuario;
				
		var loading = document.getElementById('loading');
		loading.classList.remove('loading_active');
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.classList.add('esperar_confirmacion');

		floatDialog.innerHTML = '<div><div><form id="change_pass"><p class="title">Cambiar contraseña</p><p>Nueva contraseña</p><input type="password" id="pass_usuario" autofocus /><p>Confirmar contraseña</p><input type="password" id="pass_usuario_2"/><input type="submit" value="Enviar" /><input type="reset" value="Cancelar" /></form><div id="msg_box"></div></div></div>';
		document.getElementById('change_pass').addEventListener('reset', function(e){
			if(JSON.parse(localStorage.getItem('usuario')).change_pass == true){
				app.cambiarPass();
			}
		});
		document.getElementById('change_pass').addEventListener('submit', function(e){
			e.preventDefault();
			var loading = document.getElementById('loading');
			var msgForm = document.getElementsByClassName('msg_form');
			if(msgForm) {
				for(var i = 0; i < msgForm.length; i++){
					msgForm[i].remove();
					}
				}
			loading.classList.add('loading_active');
			var passUsuario = document.querySelector('#change_pass #pass_usuario');
			var passUsuario2 = document.querySelector('#change_pass #pass_usuario_2');
			if(passUsuario.value != passUsuario2.value){
				var changePass = document.getElementById('change_pass');
				var msg = document.createElement('p');
				msg.innerHTML = 'Las contraseñas no coinciden';
				msg.classList.add('msg_form');
				changePass.appendChild(msg);
				var loading = document.getElementById('loading');
				loading.innerHTML = '';
				loading.classList.remove('loading_active');
				} // end if
			else {
				document.getElementById('msg_box').innerHTML = '';
				var dataPass = { 'id_usuario' : id_usuario , 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario , 'pass_usuario' : passUsuario.value , 'sesion_key' : localStorage.getItem('sesion_key') , 'editar_pass' : true }
				var url = 'https://www.arcos.cl/app_test4/admin/user/pass_usuario.php';
				app.sendPost(url, dataPass, function(res){
					if(res.status == 1) {
						var classStatus = 'success';
						} // end if
					if(res.status == 2) {
						var classStatus = 'error';
						} // end if
					loading.classList.remove('loading_active');
						floatDialog.innerHTML = '<form id="status_pass" class="clic_section"><div class="' + classStatus + '"></div><p style="text-align:center; color: #fff; font-size: small;">' + res.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></div></form>';
						floatDialog.classList.add('esperar_confirmacion');
						document.getElementById('ok_datos').addEventListener('click', function(){
							app.getDataUser();
							});
					}); // end sendPost
				} // end else
			}); // end submit
		},

	
	listaEmpresas: function() {
				
		var usuario = [];
		usuario = JSON.parse(localStorage.getItem('usuario'));
		var empresas = [];
		empresas = JSON.parse(localStorage.getItem('empresas'));
		
		var thumb = document.getElementById('thumb');
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.innerHTML = '<div id="popup_menu" class="clic_section"></div>';		
		floatDialog.classList.add('esperar_confirmacion');
		if(floatDialog.classList.contains('esperar_confirmacion')){
		}
		floatDialog.addEventListener('click', function(e){
			app.offDialog();
			}); // end function
		
		document.querySelector('#float_dialog #popup_menu').innerHTML = '<p style="font-size: x-small; text-align: center; width: 50%; margin: .5em auto 1.2em; border-bottom: 1px solid #ccc;">Cambiar empresa</p><ul></ul>';
		
		for(var i=0; i<empresas.length; i++){
			document.querySelector('#popup_menu ul').innerHTML += '<li id="' + empresas[i].id_empresa + '">' + empresas[i].nom_empresa + '</li>';
			}
		
		var liE = document.querySelectorAll('#popup_menu > ul > li');
		for (var i=0; i<liE.length; i++){
			liE[i].addEventListener('click', function(){
				app.cambiarEmpresa(this.getAttribute('id'));
				});
			}
		
		},
		
	
	cambiarEmpresa: function(id) {
		var empresas = [];
		empresas = JSON.parse(localStorage.getItem('empresas'));
		for(var i=0; i<empresas.length; i++){
			if(empresas[i].id_empresa == id){
				localStorage.setItem('empresa', JSON.stringify(empresas[i]));
				}
			}
		app.checkUser();

		},
	
	getDataUser: function(s) {
		var data = {'rut_usuario' : localStorage.getItem('rut_usuario') , 'dv_usuario' : localStorage.getItem('dv_usuario') , 'sesion_key' : localStorage.getItem('sesion_key') , 'get_usuario' : true};
		var url = 'https://www.arcos.cl/app_test4/admin/user/get_usuario.php';
		app.sendPost(url, data, function(res){
			if(res.status == 1){
				localStorage.setItem('usuario', JSON.stringify(res.usuario[0]));
				localStorage.setItem('escuelas', JSON.stringify(res.escuelas));
				localStorage.setItem('empresas' , JSON.stringify(res.empresas));
				if(!localStorage.getItem('empresa')){
					localStorage.setItem('empresa' , JSON.stringify(res.empresas[0]));
					}
				localStorage.setItem('ofertas' , JSON.stringify(res.ofertas));
				localStorage.setItem('tipoOferta' , JSON.stringify(res.tipo_oferta));
				localStorage.setItem('postulaciones' , JSON.stringify(res.postulaciones));	
				localStorage.setItem('mensajes', JSON.stringify(res.mensajes));
				document.body.classList.remove('body_down');
				if(res.usuario[0].change_pass == true || res.usuario[0].change_pass == 1){
					document.getElementById('loading').classList.remove('loading_active');
					app.cambiarPass();
					} // end if changePass
				if(s != 'cambiar_estado'){
					app.checkUser();
					}
			} // end if res.status == 1
			if(res.status == 2){
				localStorage.setItem('usuario', JSON.stringify(res.usuario[0]));
				app.checkUser();
			} // end if(res.status == 2)
		}); // end app.sendPost()
	},
	
	inicio: function() {
		this.iniciaFastClick();
		this.iniciaHammer();
		this.iniciaBotones();
		var empresa = localStorage.getItem('empresa');
		if(empresa){
			this.iniciaOfertas();
			}
	},
	
	iniciaFastClick: function() {
		FastClick.attach(document.body);
	},
	
	iniciaOfertas: function() {
		
		var listaOfertas = document.querySelector('#lista_ofertas > ul');
		var usuario = [];
		usuario = localStorage.getItem('usuario');
		var empresa = [];
		empresa[0] = JSON.parse(localStorage.getItem('empresa'));
		var ofertas = [];
		ofertas = JSON.parse(localStorage.getItem('ofertas'));
		var postulaciones = JSON.parse(localStorage.getItem('postulaciones'));
		var now = new Date();
		var contList = 0;
		if(ofertas){
			for(var i=0; i<ofertas.length; i++) {
				if(ofertas[i].id_empresa == empresa[0].id_empresa){
					var countDias = Math.ceil( (new Date(ofertas[i].inicio_oferta).getTime() - Date.now()) / (1000*60*60*24));
					var postulaciones_oferta = ofertas[i].postulaciones_oferta || 0;
					
					var contPostulaciones = 0;
					for(var x=0; x<postulaciones.length; x++){
						if(postulaciones[x].id_oferta == ofertas[i].id_oferta){
							contPostulaciones++;
							} // end if
						} // end for
					if(contPostulaciones != 1) {
						contPostulaciones = contPostulaciones + ' postulaciones';
						}
					else {
						contPostulaciones = contPostulaciones + ' postulación';
						}
						
					listaOfertas.innerHTML += '<li class="' + ofertas[i].nom_estado + '"><div class="section_top"><div class="titulo_oferta" onClick="app.verOferta(' + i + ')"><h2 id="titulo_oferta">' + ofertas[i].titulo_oferta + '</h2><p id="descripcion_oferta">' + ofertas[i].descripcion_oferta.substr(0,50) + '...</p></div><div id="menu_oferta" onClick="app.menuOferta(' + i + ',' + contList + ')">&#8285;</div></div><div class="section_bottom"><div class="info"><p id="tipo_oferta">' + ofertas[i].tipo_oferta + '</p><p id="count_inicio">' + countDias + ' días</p><p id="postulaciones_oferta">' + contPostulaciones + '</p></div><div id="standby" class="edit" onClick="app.standByOferta(' + i + ',' + contList + ',' + contList + ')"><div id="on_off" class="on_off"></div></div></div></li>';
					if(countDias < 0) {
						document.querySelectorAll('#lista_ofertas > ul > li')[contList].style.opacity = '.85';
						}
					contList ++;
					} // end if id_empresa
					
				} // end for
			if(contList == 0){
				document.querySelector('#lista_ofertas').innerHTML = '<div id="no_ofertas"><p>Publica tu primera oferta</p></div>	';
				}
				
			} // end if ofertas
		
		},
	
	menuOferta: function(index, place) {
		
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.innerHTML = '<div id="popup_menu" class="clic_section"><ul><li id="ver_oferta">Ver oferta</li><li id="ver_postulaciones">Ver postulaciones</li><li id="eliminar_oferta">Eliminar oferta</li></ul></div>';
		floatDialog.classList.add('esperar_confirmacion');

		if(floatDialog.classList.contains('esperar_confirmacion')) {
			floatDialog.addEventListener('click', function(e){
				if (document.querySelector('#float_dialog .clic_section') && !document.querySelector('#float_dialog .clic_section').contains(e.target) && document.querySelector('#float_dialog #eliminar_oferta') && !document.querySelector('#float_dialog #eliminar_oferta').contains(e.target)){
					app.offDialog();
					} // end if
				}); // end function
		} // end if(floatDialog)
		
		var verOferta = document.getElementById('ver_oferta');
		verOferta.addEventListener('click', function(){
			app.verOferta(index);
			});
		
		var verPotulaciones = document.getElementById('ver_postulaciones');
		verPotulaciones.addEventListener('click', function(){
			app.verPostulaciones(index);
			});
		
		var eliminarOferta = document.getElementById('eliminar_oferta');
		eliminarOferta.addEventListener('click', function(){
			app.eliminarOferta(index, place);
			});
				
		},
	
		
	verOferta: function(index, place) {
		
		firebase.analytics().logEvent('verOferta');
		
		var floatDialog = document.getElementById('float_dialog');
		app.offDialog();
								
		var oferta = JSON.parse(localStorage.getItem('ofertas'));
		var requisitos = JSON.parse(oferta[index].requisitos_oferta);
		var requisitos_oferta = '';
		for(var i = 0; i < requisitos.length; i++){
			requisitos_oferta += requisitos[i];
			if(i != requisitos.length -1) {
				requisitos_oferta += '\n';
				}
			} // end for
		
		document.getElementById('sidebar').innerHTML = '<span class="section_title">Detalles oferta</span><div id="info_oferta"><form name="detalle_oferta" id="detalle_oferta"><p>Título oferta</p><input type="text" name="titulo_oferta" id="titulo_oferta" value="' + oferta[index].titulo_oferta + '"><p>Tipo de oferta</p><select name="tipo_oferta" id="tipo_oferta"></select><div id="area_inicio_oferta"><p>Fecha de inicio</p><input type="date" name="inicio_oferta" id="inicio_oferta" value="' + oferta[index].inicio_oferta + '"></div><div id="area_fin_oferta"><p>Fecha de término</p><input type="date" name="fin_oferta" id="fin_oferta" value="' + oferta[index].fin_oferta + '"></div><p>Descripción anuncio</p><textarea type="text" name="descripcion_oferta" rows="6" id="descripcion_oferta">' + oferta[index].descripcion_oferta + '</textarea><p>Requisitos</p><textarea type="text" name="requisitos_oferta" id="requisitos_oferta" rows="6">' + requisitos_oferta + '</textarea><p>Sueldo</p><input type="number" name="sueldo_oferta" id="sueldo_oferta" value="' + oferta[index].sueldo_oferta + '"><p>Cupos</p><input type="number" name="cupos_oferta" id="cupos_oferta" value="' + oferta[index].cupos_oferta + '" /><p>Dirigido a</p><select name="publico_oferta" id="publico_oferta"></select></form></div><div id="oferta_buttom_area"><p id="edit_on"></p><p id="trash_oferta"></p><p id="close_oferta"></p></div>';
		
		var editOn = -1;
		var formElements = document.querySelectorAll('#detalle_oferta *:not(p)');
		for (var i = 0; i < formElements.length; i++) {
			formElements[i].disabled = true;
			formElements[i].style.opacity = '.85';
			formElements[i].addEventListener('keydown', function(e) {
			if (e.which === 38 || e.which === 40) {
				e.preventDefault();
				} // end if
			}); // end function
		} // end for
		
		document.getElementById('sidebar').classList.add('sidebar_active');
		
		document.getElementById('edit_on').addEventListener('click', function(){
			if(editOn == -1) { // form editable
				this.classList.add('cancel_this');
				var formElements = document.querySelectorAll('#detalle_oferta *:not(p)');
				for (var i = 0; i < formElements.length; i++) {
					formElements[i].disabled = false;
					formElements[i].style.opacity = '';
					}
				
				var input = document.createElement('input');
				app.setAttributes(input, {'type':'submit', 'name':'editar_oferta', 'value':'Enviar', 'id':'editar_oferta'});
				document.querySelector('#detalle_oferta').appendChild(input);
				editOn = editOn * -1;
				
				var tipoOferta = document.querySelector('#detalle_oferta #tipo_oferta');
				if(tipoOferta){
					tipoOferta.addEventListener('change',function(){
						if (tipoOferta.value != 'laboral') {
							document.querySelector('#detalle_oferta #area_fin_oferta').style.display = 'block';
							} // end if
						else {
							document.querySelector('#detalle_oferta #area_fin_oferta').style.display = 'none';
							document.querySelector('#detalle_oferta #area_fin_oferta').value = '';
							} // end else
		
						},false);
					}
				
				document.getElementById('detalle_oferta').addEventListener('submit', function(e){
					e.preventDefault();
					app.editarOferta(oferta[index].id_oferta);
					});
				}
			else { // form no editable
				var editarOferta = document.getElementById('editar_oferta');
				document.getElementById('detalle_oferta').removeChild(editarOferta);
				this.classList.remove('cancel_this');
				var formElements = document.querySelectorAll('#detalle_oferta *:not(p)');
				for (var i = 0; i < formElements.length; i++) {
					formElements[i].disabled = true;
					formElements[i].style.opacity = '.85';
					}
				editOn = editOn*-1;
				}
		});
		
		var trashOferta = document.getElementById('trash_oferta');
		var trash = -1
		trashOferta.addEventListener('click', function(){
			if(trash == -1){
				trash *= -1;
				}
			else {
				trash *= -1;
				}
			app.eliminarOferta(index, place);
			});
		
		document.getElementById('close_oferta').addEventListener('click', function(){
			document.getElementById('sidebar').classList.remove('sidebar_active');
		});
		
		var tipoOferta = JSON.parse(localStorage.getItem('tipoOferta'));
		var tipo_oferta = document.querySelector('#detalle_oferta #tipo_oferta');
		for(var i=0; i<tipoOferta.length; i++){
			if(tipoOferta[i].tipo_oferta === oferta[index].tipo_oferta) {
				tipo_oferta.innerHTML += '<option value="' + tipoOferta[i].tipo_oferta + '" selected>' + tipoOferta[i].tipo_oferta + '</option>';
				} // end if
				
			else {
				tipo_oferta.innerHTML += '<option value="' + tipoOferta[i].tipo_oferta + '">' + tipoOferta[i].tipo_oferta + '</option>';
				} // end else
			} // end for
		
		if(tipo_oferta.value != 'laboral'){
			document.querySelector('#detalle_oferta #area_fin_oferta').style.display = 'block';
			}
		
		var listEscuelas = JSON.parse(localStorage.getItem('escuelas'));
		var selectEscuela = document.querySelector('#detalle_oferta #publico_oferta');
		for(var i=0; i<listEscuelas.length; i++){
			if(listEscuelas[i].ESC_ID === oferta[index].escuela_oferta) {
				selectEscuela.innerHTML += '<option value="' + listEscuelas[i].ESC_ID + '" selected>' + listEscuelas[i].ESC_NOM.toLowerCase().charAt(0).toUpperCase() + listEscuelas[i].ESC_NOM.toLowerCase().slice(1) + '</option>';
				} // end if
				
			else {
				selectEscuela.innerHTML += '<option value="' + listEscuelas[i].ESC_ID + '">' + listEscuelas[i].ESC_NOM.toLowerCase().charAt(0).toUpperCase() + listEscuelas[i].ESC_NOM.toLowerCase().slice(1) + '</option>';
				} // end else
				
			} // end for
		
		},
		
	
	verPostulaciones: function(index){
		
		var index = index;
		firebase.analytics().logEvent('verPostulaciones');
		
		var floatDialog = document.getElementById('float_dialog');
		app.offDialog();
								
		var oferta = JSON.parse(localStorage.getItem('ofertas'));
		var postulaciones = JSON.parse(localStorage.getItem('postulaciones'));
		
		var sidebar = document.getElementById('sidebar');
		sidebar.classList.add('postulaciones');
		sidebar.innerHTML = '<span class="section_title"><span style="font-size: x-small">Postulaciones</span><br>' + oferta[index].titulo_oferta + '</span><div id="lista_postulaciones"><ul></ul></div>';
		var listaPostulaciones = document.querySelector('#lista_postulaciones > ul');
		
		var contPostulacion = 0;
		for(var i = 0; i < postulaciones.length; i++){
			if(postulaciones[i].id_oferta == oferta[index].id_oferta){
				contPostulacion ++;
				listaPostulaciones.innerHTML += '<li><div class="section_top"><div class="postulante"><h2 id="nombre_postulante">' + postulaciones[i].nom_alumno + '</h2><p id="carrera_postulante" style="font-size: x-small !important;">' + postulaciones[i].CAR_DES + '</p></div><div id="menu_postulacion" onClick="app.verPostulante(\'' + postulaciones[i].id_postulacion + '\')"><div class="fecha_postulacion">' + postulaciones[i].fecha_hora.substring(0, 10) + '</div><div class="user_postulacion">Ver más</div></div></div></div><div id="info_postulante"><p><b>Comentarios:</b></p><p style="color:#888">' + postulaciones[i].comentario + '</p><div><p onClick="cordova.InAppBrowser.open(\'http://www.portafolio.arcos.cl/\', \'_system\', \'location=yes,useWideViewPort=no\')" id="portafolio">Ver portafolio</p><p id="contacto">Contactar</p></div></div></li>';
				} // end if
			} // end for
		if(contPostulacion == 0) {
			sidebar.innerHTML = '<span class="section_title">Postulaciones ' + oferta[index].titulo_oferta + '</span><div id="lista_postulaciones"></div>';
			var listaPostulaciones = document.querySelector('#lista_postulaciones');
			listaPostulaciones.innerHTML = '<p class="no_postulacion">Esta oferta aún no tiene postulaciones.</p>';
			} // end if contPostulacion == 0
			
		sidebar.classList.add('sidebar_active');
		
		},


	verPostulante: function(id_postulacion){
		
		firebase.analytics().logEvent('verPostulante');

		var chat = document.getElementById('chat');
		var postulante = JSON.parse(localStorage.getItem('postulaciones'));
		var mensajes = JSON.parse(localStorage.getItem('mensajes'));
		for (var i = 0 ; i < postulante.length ; i++){
			if(postulante[i].id_postulacion == id_postulacion){
				chat.innerHTML = '<span class="section_title">Info postulante</span>'+
				'<div>'+
				'<div class="datos_postulantes">'+
					'<span>Nombre:</span><p>' + postulante[i].nom_alumno + '</p>'+
					'<span>Carrera:</span><p>' + postulante[i].CAR_DES + '</p>'+
					'<span>Postuló el:</span><p>' + postulante[i].fecha_hora.split(' ', 1) + '</p>'+
					'<div id="comentario"><span>Reseña del postulante:</span><p id="first_msg">' + postulante[i].comentario + '</p></div><div id="chat_seccion"></div>'+
				'</div>'+
				'<div class="msg_seccion">'+
					'<form id="msg_form"><textarea id="msg_area" rows="8" placeholder="Enviar mensaje..." required></textarea><input type="submit" value="Enviar" disabled><input type="reset" value="Volver"></form>'+
				'</div>';
				
				var msgArea = document.querySelector('#msg_form #msg_area');
				msgArea.addEventListener('keydown', function(){
					if(msgArea.value != ''){
						document.querySelector('#msg_form input[type="submit"]').disabled = false;
						}
					else {
						document.querySelector('#msg_form input[type="submit"]').disabled = true;
						}
					});
				
				var chatSeccion = document.getElementById('chat_seccion');
				var nom_alumno = postulante[i].nom_alumno.split(' ');
				for(var i = 0 ; i < mensajes.length ; i++){
					if(mensajes[i].id_postulacion == id_postulacion && mensajes[i].rol_usuario == 1) { // mensajs del ofertante
						chatSeccion.innerHTML += '<div class="msg_user"><span>Tú / ' + mensajes[i].fecha_hora + '</span><p>' + mensajes[i].mensaje + '</p></div>';
						} // end if
					if(mensajes[i].id_postulacion == id_postulacion && mensajes[i].rol_usuario == 2) { // mensajs del alumno
						chatSeccion.innerHTML += '<div class="msg_alum"><span>' + nom_alumno[0] + ' / ' + mensajes[i].fecha_hora + '</span><p>' + mensajes[i].mensaje + '</p></div>';
						} // end if
					} // end for
				
				chatSeccion.scrollTo(0,chatSeccion.scrollHeight);
				
				chat.classList.add('chat_active');
				var msgForm = document.getElementById('msg_form');
				msgForm.addEventListener('submit', function(e){
					e.preventDefault();
					app.enviarMsg(id_postulacion);
					});
				msgForm.addEventListener('reset', function(e){
					chat.classList.remove('chat_active');
				});
			} // end if
		} // end for
	},
	
	
	
	enviarMsg: function(id_postulacion){
		var data = JSON.parse(localStorage.getItem('usuario'));
		var mensajes = JSON.parse(localStorage.getItem('mensajes'));
		var msgArea = document.getElementById('msg_area');
		var chatSeccion = document.getElementById('chat_seccion');
		var loading = document.getElementById('loading');
		
		var dataM = { 'id_usuario' : data.id_usuario , 'rut_usuario' : data.rut_usuario , 'dv_usuario' : data.dv_usuario , 'id_postulacion' : id_postulacion , 'mensaje' : msgArea.value , 'sesion_key' : localStorage.getItem('sesion_key') , 'enviar_mensaje' : true }
		url = 'https://www.arcos.cl/app_test4/admin/offer/postulaciones.php';
		app.sendPost(url, dataM, function(res){
			if(res.status == 1){
				loading.classList.remove('loading_active');
				localStorage.setItem('mensajes', JSON.stringify(res.mensajes));
				chatSeccion += '<p>Mensaje: ' + res.mensajes[res.mensajes.length-1] + '</p>';
				app.verPostulante(id_postulacion);
				} // end if
			});
		},
		
	
	iniciaBotones: function() {
		
		document.addEventListener("backbutton", function(){
			var check = 0;
			if(document.querySelector('#sidebar').classList.contains('sidebar_active')){
				document.querySelector('#sidebar').classList.remove('sidebar_active');
				check = 1;
				return;
				} // end if
			if(document.querySelector('#chat').classList.contains('chat_active')){
				document.querySelector('#chat').classList.remove('chat_active');
				check = 1;
				return;
				} // end if
			if(document.querySelector('#float_dialog').classList.contains('esperar_confirmacion')){
				document.querySelector('#float_dialog').classList.remove('esperar_confirmacion');
				check = 1;
				return;
				} // end if
			if(check == 0) {
				var floatDialog = document.getElementById('float_dialog');
				var loading = document.getElementById('loading');
				loading.innerHTML = '';
				loading.classList.remove('loading_active');
				floatDialog.classList.add('esperar_confirmacion');
				floatDialog.innerHTML = '<form id="close_app" class="clic_section"><p style="font-size: small; text-align: center; margin-bottom: 3px !important;">¿Confirmas que deseas cerrar la aplicación?</p><input type="submit" value="Sí"><input type="reset" value="No"></form>';
				var closeApp = document.getElementById('close_app');
				closeApp.addEventListener('submit', function(){
					navigator.app.exitApp();
					});
				closeApp.addEventListener('reset', function(){
					app.offDialog();
					});
				return;
				} // end if
			}, false); // end function
		
		var regEmpresa = document.getElementById('reg_empresa');
		if(regEmpresa){
			regEmpresa.addEventListener('click', this.regEmpresa, false);
			} // end if(regEmpresa) 
		var botonMore = document.querySelector('#more p');
		if(botonMore) {
			botonMore.addEventListener('click',this.activarMore,false);
			} // end if(botonMore)
		var botonMenu = document.querySelectorAll('#menu');
		var botonContact = document.querySelector('#contactar');
		if(botonContact) {
			botonContact.addEventListener('click',this.activarMore,false);
			} // end if(botonContact)		
		var inicioOferta = document.querySelector('#menu_more #inicio_oferta');
		var finOferta = document.querySelector('#menu_more #fin_oferta');
		if(inicioOferta) {
			inicioOferta.addEventListener('change', this.checkFecha, false);
			}
		if(finOferta) {
			finOferta.addEventListener('change', this.checkFecha, false);
			}
		for (var i=0;i<botonMenu.length;i++) {
			botonMenu[i].addEventListener('click',this.activarMenu, false);
			} // end for
		var anadirOferta = document.getElementById('anadir_oferta');
		if(anadirOferta) {
			anadirOferta.addEventListener('submit', function(e){
				e.preventDefault();
				app.anadirOferta()
				});
			anadirOferta.addEventListener('reset', function(e){
				document.querySelector('#anadir_oferta #area_inicio_oferta').removeAttribute('style');
				document.querySelector('#anadir_oferta #area_fin_oferta').removeAttribute('style');
				});
			} // end if(anadirOferta)
		var logOut = document.getElementById('logout');
		if(logout){
			logOut.addEventListener('click', function(){
				app.logout();
				}); // end function
			} // end if(logout)
	},
	
	iniciaHammer: function() {
		var sidebar = document.getElementById('sidebar');
		var hammerTime = new Hammer(sidebar);
		hammerTime.on('pan', function(e){
			if(e.direction == '2' && e.distance > 50 && e.deltaY < 25 && e.deltaY > -25){
				sidebar.classList.remove('sidebar_active');
				}
			});
		
		var body = document.body;
		var header = document.querySelector('#container header');
		var hammerTime = new Hammer(body);
		hammerTime.on('pan', function(e){
			if(e.direction == '16' && e.distance > 100 && e.target == header){
				document.body.classList.add('body_down');
				var loading = document.getElementById('loading');
				loading.innerHTML = '<p></p>';
				loading.classList.add('loading_active');
				setTimeout(function(){
					app.getDataUser();
				},500);
				
				}
			});
		
		var chat = document.getElementById('chat');
		var hammerTime = new Hammer(chat);
		hammerTime.on('pan', function(e){
			if(e.direction == '2' && e.distance > 50 && e.deltaY < 25 && e.deltaY > -25){
				chat.classList.remove('chat_active');
				}
			});
		
		},
		
	activarMore: function() {

		var menuMore = document.getElementById('menu_more');
		var more = document.getElementById('more');
		var moreP = document.getElementById('more').querySelector('p');
		var mainSection = document.querySelector('#main_section');
		
		var tipoOferta = document.querySelector('#anadir_oferta #tipo_oferta');
		if(tipoOferta){
			tipoOferta.addEventListener('change',function(){
				document.querySelector('#anadir_oferta #area_inicio_oferta').style.display = 'block';
				if (tipoOferta.value != 'laboral') {
					document.querySelector('#anadir_oferta #area_fin_oferta').style.display = 'block';
					} // end if
				else {
					document.querySelector('#anadir_oferta #area_fin_oferta').style.display = 'none';
					document.querySelector('#anadir_oferta #area_fin_oferta').value = '';
					} // end else

				},false); // end function
			} // end if(tipoOferta)
		
		if (checkMore == false) {
			menuMore.classList.add('more_active');
			if(moreP) {
				moreP.style.transform = 'rotate(45deg)';
				more.classList.add('cerrar');
			}
			mainSection.style = 'filter: blur(3px); -webkit-filter: blur(3px); opacity: .35';
			checkMore = true;
				}
		else {
			menuMore.classList.remove('more_active');
			if(moreP) {
				moreP.style.transform= 'rotate(0)';
				more.classList.remove('cerrar');
			}
			mainSection.style = 'filter: blur(0); -webkit-filter: blur(0); opacity: 1';
			checkMore = false;
			}
			
		var bodyHeight = document.body.clientHeight;
		window.addEventListener('resize', function(){
			if(window.innerHeight < bodyHeight) {
				more.style.transform = 'TranslateY(100%)';
				}
			else {
				more.style.transform = 'TranslateY(0)';
				}
			});
			
	},
		
	activarMenu: function () {
		var container = document.getElementById('container');
		var containerMenu = document.getElementById('container_menu');
		var containerEdit = document.getElementById('edit_container_menu');
		var menu = document.getElementById('page_menu');
		var menuMore = document.getElementById('menu_more');
		var more = document.getElementById('more');
			
		if (checkMenu==false) {
			if(more){
				more.classList.add('more_down');
				}			
			container.classList.add('rotate');
			menu.classList.add('rotate_menu');
			checkMenu = true;
			containerEdit.innerHTML = '';
			containerEdit.style.display = 'none';
			containerMenu.style.display = 'table-cell';
			}
		else {
			if(more){
				more.classList.remove('more_down');
				}
			container.classList.remove('rotate');
			menu.classList.remove('rotate_menu');
			checkMenu = false;
			}			
		},
	
	
	regEmpresa: function() {
		var rut_empresa = ''
		var dv_empresa = '';
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.classList.add('esperar_confirmacion');
		floatDialog.innerHTML = '<div><div><form id="anadir_empresa" class="clic_section"><p class="title">Registro empresa</p><p>Rut empresa</p><input type="text" id="rut_empresa" autofocus /><input type="submit" value="Enviar" /><input type="reset" value="Cancelar" /></form></div></div>';
		
		if(floatDialog.classList.contains('esperar_confirmacion')) {
			floatDialog.addEventListener('click', function(e){ 
				if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
					app.offDialog();
					} // end if
				}); // end function
			} // end if(floatDialog)
		
		document.getElementById('rut_empresa').addEventListener('blur', function(){
			if(document.getElementById('rut_empresa').value != ''){
				rut_empresa = document.getElementById('rut_empresa').value;
				dv_empresa = rut_empresa.slice(-1);
				rut_empresa = rut_empresa.substring(0, rut_empresa.length - 1);
				rut_empresa = rut_empresa.match(/\d+/g).join('');
				document.getElementById('rut_empresa').value = rut_empresa + '-' + dv_empresa;
				}
			});
		
		document.getElementById('anadir_empresa').addEventListener('reset', function() {
			var floatDialog = document.getElementById('float_dialog');
			app.offDialog();
			});
		document.getElementById('anadir_empresa').addEventListener('submit', function(e) {
			e.preventDefault();
			app.checkEmpresa(rut_empresa, dv_empresa);
			});
		
		},



	checkEmpresa: function(rut_empresa, dv_empresa) {
		var floatDialog = document.getElementById('float_dialog');
		var loading = document.getElementById('loading');
		var id_usuario = JSON.parse(localStorage.getItem('usuario')).id_usuario;
		var rut_usuario = JSON.parse(localStorage.getItem('usuario')).rut_usuario;
		var dv_usuario = JSON.parse(localStorage.getItem('usuario')).dv_usuario;
		var dataE = {'id_usuario' : id_usuario , 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario , 'rut_empresa' : rut_empresa , 'dv_empresa' : dv_empresa , 'sesion_key' : localStorage.getItem('sesion_key') , 'check_empresa' : true};
		var url = 'https://www.arcos.cl/app_test4/admin/user/registro_empresa.php';
		app.sendPost(url, dataE, function(data){
			if(data.status == 1) { // La empresa ya existe y puede ser agregada
				loading.classList.remove('loading_active');
				floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="success"></div><p style="text-align:center; color: #fff; font-size: small;">' + data.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></form>';
				var okDatos = document.getElementById('ok_datos');
				okDatos.addEventListener('click', function(){
					app.asociarEmpresa(data.id_empresa, data.nom_empresa);
				});
				} // end if(data.status == 1)
					
			if(data.status == 2) { // La empresa existe y ya está asociada al usuario
				loading.classList.remove('loading_active');
				floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="error"></div><p style="text-align:center; color: #fff; font-size: small;">' + data.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></form>';
				var okDatos = document.getElementById('ok_datos');
				okDatos.addEventListener('click', function(){
					app.checkUser();
				});
				} // end if(data.status == 2)
					
			if(data.status == 3) { // La empresa es nueva
				loading.classList.remove('loading_active');
				floatDialog.innerHTML = '<div id="div_reg_empresa" class="clic_section"><p class="title">Registro empresa</p><form id="form_reg_empresa"><p>Rut empresa</p><input type="text" id="rut_empresa" value="' + data.rut_empresa + '-' + data.dv_empresa + '"><p>Nombre empresa</p><input type="text" id="nom_empresa" autofocus><p>Director/responsable empresa</p><input type="text" id="resp_empresa"><p>Teléfono empresa</p><input type="tel" id="tel_empresa"><p>Dirección empresa</p><input type="text" id="dir_empresa"><p>Comuna empresa</p><input type="text" id="com_empresa"><p>Correo empresa</p><input type="email" id="mail_empresa"><input type="submit" name="crear_empresa" value="Crear" id="crear_empresa"><input type="reset" value="Cancelar" id="cancelar_check_empresa"></form></div>';

				document.getElementById('form_reg_empresa').addEventListener('reset', function(){
					floatDialog.html = '';
					app.offDialog();
				});
				document.getElementById('form_reg_empresa').addEventListener('submit', function(e){
					e.preventDefault();
					app.anadirEmpresa(data);
				}) // end if submit
				} // end if(data.status == 3)
			});
	},



	asociarEmpresa: function(id_empresa, nom_empresa) {
		var id_usuario = JSON.parse(localStorage.getItem('usuario')).id_usuario;
		var rut_usuario = JSON.parse(localStorage.getItem('usuario')).rut_usuario;
		var dv_usuario = JSON.parse(localStorage.getItem('usuario')).dv_usuario;
		var loading = document.getElementById('loading');
		var floatDialog = document.getElementById('float_dialog');
		loading.classList.add('loading_active');
		dataE = { 'id_empresa' : id_empresa , 'nom_empresa' : nom_empresa , 'id_usuario' : id_usuario , 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario , 'sesion_key' : localStorage.getItem('sesion_key') , 'asociarEmpresa' : true }
		url = 'https://www.arcos.cl/app_test4/admin/user/registro_empresa.php';
		app.sendPost(url, dataE, function(data){
			loading.classList.remove('loading_active');
			floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="success"></div><p style="text-align:center; color: #fff; font-size: small;">' + data.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></form>';
			var okDatos = document.getElementById('ok_datos');
			okDatos.addEventListener('click', function(){
				app.getDataUser();
			}); // end function
		}); // end function
	},

	
	anadirEmpresa: function(data) {
		var loading = document.getElementById('loading');
		var floatDialog = document.getElementById('float_dialog');

		var id_usuario = JSON.parse(localStorage.getItem('usuario')).id_usuario;
		var rut_usuario = JSON.parse(localStorage.getItem('usuario')).rut_usuario;
		var dv_usuario = JSON.parse(localStorage.getItem('usuario')).dv_usuario;
		var dataE = {
			'id_usuario' : id_usuario,
			'rut_usuario' : rut_usuario,
			'dv_usuario' : dv_usuario,
			'rut_empresa' : data.rut_empresa ,
			'dv_empresa' : data.dv_empresa,
			'nom_empresa' : document.querySelector('#form_reg_empresa #nom_empresa').value,
			'resp_empresa' : document.querySelector('#form_reg_empresa #resp_empresa').value,
			'tel_empresa' : document.querySelector('#form_reg_empresa #tel_empresa').value,
			'dir_empresa' : document.querySelector('#form_reg_empresa #dir_empresa').value,
			'com_empresa' : document.querySelector('#form_reg_empresa #com_empresa').value,
			'mail_empresa' : document.querySelector('#form_reg_empresa #mail_empresa').value,
			'sesion_key' : localStorage.getItem('sesion_key'),
			'alta_empresa' : true
		} // end dataE
		var url = 'https://www.arcos.cl/app_test4/admin/user/registro_empresa.php';
		app.sendPost(url, dataE, function(data){
			loading.classList.remove('loading_active');
			floatDialog.innerHTML = '<form id="check_rut_form" class="clic_section"><div class="success"></div><p style="text-align:center; color: #fff; font-size: small;">' + data.msg + '</p><p style="background:#00b3e3;color:#fff" id="ok_datos">Ok</p></form>';
			var okDatos = document.getElementById('ok_datos');
			okDatos.addEventListener('click', function(){
				app.getDataUser();
			}); // end function
		}); // end sendPost
		},
	
	
	checkFecha: function(){
		var inicioOferta = document.querySelector('#menu_more #inicio_oferta');
		if(inicioOferta.value){
			var inicio = inicioOferta.value.match(/(\d+)/g);
			var startDate = new Date(inicio[0], inicio[1]-1, inicio[2]);
			var today = new Date();
			if (startDate.getTime() < today.getTime()) {
				alert("Debes seleccionar una fecha futura.");
				inicioOferta.value = '';
			}
		}

		var finOferta = document.querySelector('#menu_more #fin_oferta');
		if(finOferta.value){
			var fin = finOferta.value.match(/(\d+)/g);
			var endDate = new Date(fin[0], fin[1]-1, fin[2]);
			if (startDate.getTime() > endDate.getTime()) {
				alert("La fecha de término no puede ser anterior a la fecha de inicio.");
				finOferta.value = '';
			}
		}
	},
		
		
	anadirOferta: function() {
		
		var usuario = JSON.parse(localStorage.getItem('usuario'));
		var empresa = JSON.parse(localStorage.getItem('empresa'));
		
		var id_oferta = id_oferta;
		var requisitos_oferta = document.querySelector('#anadir_oferta #requisitos_oferta').value;
		requisitos_oferta = JSON.stringify(requisitos_oferta.split('\n'));
		
		var datosOferta = { 'id_usuario': usuario.id_usuario, 'rut_usuario' : usuario.rut_usuario , 'dv_usuario' : usuario.dv_usuario, 'id_empresa' : empresa.id_empresa, 'rut_empresa' : empresa.rut_empresa , 'titulo_oferta' : document.querySelector('#anadir_oferta #titulo_oferta').value , 'tipo_oferta' : document.querySelector('#anadir_oferta #tipo_oferta').value , 'inicio_oferta' : document.querySelector('#anadir_oferta #inicio_oferta').value , 'fin_oferta' : document.querySelector('#anadir_oferta #fin_oferta').value , 'descripcion_oferta' : document.querySelector('#anadir_oferta #descripcion_oferta').value , 'requisitos_oferta' : requisitos_oferta , 'sueldo_oferta' : document.querySelector('#anadir_oferta #sueldo_oferta').value , 'cupos_oferta' : document.querySelector('#anadir_oferta #cupos_oferta').value , 'escuela' : document.querySelector('#anadir_oferta #escuelas').value , 'sesion_key' : localStorage.getItem('sesion_key') , 'anadir_oferta' : true }
										
		var url = 'https://www.arcos.cl/app_test4/admin/offer/ofertas.php';		
		app.sendPost(url,datosOferta,function(res){
			document.getElementById('loading').classList.remove('loading_active');
			if(res.status == 1){
				var classMsg = 'success';
				firebase.analytics().logEvent('anadirOferta');
				} // end if res.status == 1
			else{
				var classMsg = 'error';
				}
			var floatDialog = document.getElementById('float_dialog');
			floatDialog.classList.add('esperar_confirmacion');
			floatDialog.innerHTML = '<form id="msg_form"><div class="' + classMsg + '"></div><p style="font-size: small">' + res.msg + '</p><input type="submit" value="Ok"></form>';
			document.querySelector('#msg_form').addEventListener('submit', function(e){
				e.preventDefault();
				app.getDataUser();
				});
			}); // end app.sendPost()
			
		},
		
		
	setAttributes: function (element, attrs) {
		for(var key in attrs) {
			element.setAttribute(key, attrs[key]);
		}
	},
	
	
	editarOferta: function(id_oferta){
		
		var id_oferta = id_oferta;
		var requisitos_oferta = document.querySelector('#detalle_oferta #requisitos_oferta').value;
		requisitos_oferta = JSON.stringify(requisitos_oferta.split('\n'));
				
		var datosOferta = { 'id_oferta': id_oferta , 'titulo_oferta' : document.querySelector('#detalle_oferta #titulo_oferta').value , 'tipo_oferta' : document.querySelector('#detalle_oferta #tipo_oferta').value , 'inicio_oferta' : document.querySelector('#detalle_oferta #inicio_oferta').value , 'fin_oferta' : document.querySelector('#detalle_oferta #fin_oferta').value , 'descripcion_oferta' : document.querySelector('#detalle_oferta #descripcion_oferta').value , 'requisitos_oferta' : requisitos_oferta , 'sueldo_oferta' : document.querySelector('#detalle_oferta #sueldo_oferta').value , 'cupos_oferta' : document.querySelector('#detalle_oferta #cupos_oferta').value , 'escuela' : document.querySelector('#detalle_oferta #publico_oferta').value , 'rut_usuario' : localStorage.getItem('rut_usuario') , 'dv_usuario' : localStorage.getItem('dv_usuario') , 'sesion_key' : localStorage.getItem('sesion_key') , 'editar_oferta' : true }
						
		var url = 'https://www.arcos.cl/app_test4/admin/offer/ofertas.php';		
		app.sendPost(url,datosOferta,function(res){
			document.getElementById('loading').classList.remove('loading_active');
			if(res.status == 1){
				var classMsg = 'success';
				firebase.analytics().logEvent('editarOferta');
				} // end if res.status == 1
			else{
				var classMsg = 'error';
				}
			var floatDialog = document.getElementById('float_dialog');
			floatDialog.classList.add('esperar_confirmacion');
			floatDialog.innerHTML = '<form id="msg_form"><div class="' + classMsg + '"></div><p style="font-size: small">' + res.msg + '</p><input type="submit" value="Ok"></form>';
			document.querySelector('#msg_form').addEventListener('submit', function(e){
				e.preventDefault();
				app.getDataUser();
				}); // end function
			}); // end app.sendPost()
			
		},
	
	
	standByOferta: function(index, place) {
		var ofertas = JSON.parse(localStorage.getItem('ofertas'));
		var index;
		var estado_oferta;
		var className;
		var itemList = document.querySelectorAll('#lista_ofertas > ul > li');
		var datosOferta = { 'id_oferta': ofertas[index].id_oferta , 'rut_usuario' : localStorage.getItem('rut_usuario') , 'dv_usuario' : localStorage.getItem('dv_usuario') , 'estado_oferta' : ofertas[index].estado_oferta , 'sesion_key' : localStorage.getItem('sesion_key') , 'cambiarEstado': true };
		url = 'https://www.arcos.cl/app_test4/admin/offer/ofertas.php';
		app.sendPost(url, datosOferta, function(res){
			document.getElementById('loading').classList.remove('loading_active');
			itemList[place].className = res.nom_estado;
			}); // end app.sendPost();
		setTimeout( function(){ app.getDataUser('cambiar_estado') } ,500);
		},
	
	
	eliminarOferta: function(index, place) {
		var itemList = document.querySelectorAll('#lista_ofertas > ul > li');
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.classList.add('esperar_confirmacion');
		floatDialog.innerHTML = '<form id="msg_box" class="clic_section"></form>';
		msgBox = document.getElementById('msg_box');
		msgBox.innerHTML = '<p style="text-align: center; margin-bottom: 5px !important">¿Confirmas que deseas eliminar esta oferta?<br>(Esta opción no se puede deshacer)</p><input type="submit" value="Confirmar" /><input type="reset" value="Cancelar" />';
		msgBox.addEventListener('reset', function(){
				app.offDialog();
			});
		msgBox.addEventListener('submit', function(e) {
			e.preventDefault();
			itemList[place].style.transform = 'translateX(-100%)';
			itemList[place + 1].style.marginTop = `${itemList[place + 1].offsetHeight * -1}px`;
			var ofertas = JSON.parse(localStorage.getItem('ofertas'));
			var datosOferta = { 'id_oferta': ofertas[index].id_oferta, 'rut_usuario' : localStorage.getItem('rut_usuario') , 'dv_usuario' : localStorage.getItem('dv_usuario') , 'sesion_key' : localStorage.getItem('sesion_key') , 'eliminarOferta': true };
			url = 'https://www.arcos.cl/app_test4/admin/offer/ofertas.php';
			app.sendPost(url, datosOferta, function(res){
				document.getElementById('loading').classList.remove('loading_active');
				app.getDataUser();
				}); // end app.sendPost();
			});
		},
		
	setAttributes: function (element, attrs) {
		for(var key in attrs) {
			element.setAttribute(key, attrs[key]);
			}
		
		},
	
	
	
	offDialog: function(){
		var floatDialog = document.getElementById('float_dialog');
		floatDialog.classList.remove('esperar_confirmacion');
		setTimeout(function(){
				floatDialog.innerHTML = '';
			}, 500);
		},
	
	
		
	signin: function(){
			
		document.getElementById('login').innerHTML = '<form name="login_usuario" id="login_usuario"><p>Rut usuario</p><input type="text" placeholder="11.111.111-1" id="rut_usuario" name="rut_usuario" autofocus /><p>Contraseña</p><input type="password" placeholder="Contraseña" id="pass_usuario" name="pass_usuario" /><input type="submit" value="Ingresar" id="submit_usuario" name="login" class="submit" /><input type="reset" value="Volver" id="volver" name="volver" class="reset" /></form><div id="load"></div><div id="msg"></div>';
		var rut_usuario;
		var dv_usuario;
		var pass_usuario;
			
		document.querySelector('#login_usuario #rut_usuario').addEventListener('blur', function(){
			if(document.querySelector('#login_usuario #rut_usuario').value != ''){
				rut_usuario = document.querySelector('#login_usuario #rut_usuario').value;
				dv_usuario = rut_usuario.slice(-1);
				rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
				rut_usuario = rut_usuario.match(/\d+/g).join('');
				document.getElementById('rut_usuario').value = rut_usuario + '-' + dv_usuario;
				} // end if
			});
			
		document.getElementById('login_usuario').addEventListener('reset', function() {app.checkUser()});
		
		document.getElementById('login_usuario').addEventListener('submit', function(e) {
			e.preventDefault();
			if(rut_usuario == '' && dv_usuario == ''){
				rut_usuario = document.getElementById('rut_usuario').value;
				dv_usuario = rut_usuario.slice(-1);
				rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
				rut_usuario = rut_usuario.match(/\d+/g).join('');
				document.getElementById('rut_usuario').value = rut_usuario + '-' + dv_usuario;
				}
			passUsuario = document.getElementById('pass_usuario').value;
			app.login(rut_usuario, dv_usuario, pass_usuario);
			});
		},
	
	signup: function(){
		document.getElementById('login').innerHTML = '<form name="signin_usuario" id="check_usuario"><p>Rut usuario</p><input type="text" placeholder="11.111.111-1" id="rut_usuario" name="rut_usuario" autofocus /><div id="form_signup"></div><input type="submit" value="Continuar" id="submit" name="submit" class="submit" /><input type="reset" value="Volver" id="volver" name="volver" class="reset" /></form><div id="load"></div>';
		
		var rut_usuario;
		var dv_usuario;
		
		document.getElementById('rut_usuario').addEventListener('blur', function(){
			if(document.getElementById('rut_usuario').value != '') {
				rut_usuario = document.getElementById('rut_usuario').value;
				dv_usuario = rut_usuario.slice(-1);
				rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
				rut_usuario = rut_usuario.match(/\d+/g).join('');
				document.getElementById('rut_usuario').value = rut_usuario + '-' + dv_usuario;
				}
			});
						
		document.getElementById('check_usuario').addEventListener('reset', function() {app.checkUser()});
		document.getElementById('check_usuario').addEventListener('submit', function(e) {
			rut_usuario = document.getElementById('rut_usuario').value;
			dv_usuario = rut_usuario.slice(-1);
			rut_usuario = rut_usuario.substring(0, rut_usuario.length - 1);
			rut_usuario = rut_usuario.match(/\d+/g).join('');
			document.getElementById('rut_usuario').value = rut_usuario + '-' + dv_usuario;
			e.preventDefault();
			app.submit(rut_usuario, dv_usuario)
			});
		},
	
	
	submit: function(rut_usuario, dv_usuario){
		var rut_usuario = rut_usuario;
		var dv_usuario = dv_usuario;
		var data = { 'rut_usuario': rut_usuario , 'dv_usuario' : dv_usuario , 'sesion_key' : localStorage.getItem('sesion_key') , 'check_user': true }
		var url = 'https://www.arcos.cl/app_test4/admin/login/login_usuario.php';
		app.sendPost(url, data, function(res){
			if(res.status == 1) { // Usuario ya existe. Debe iniciar sesión
				document.getElementById('loading').classList.remove('loading_active');
				document.getElementById('float_dialog').classList.add('esperar_confirmacion');
				document.getElementById('float_dialog').innerHTML = '<form id="check_rut_form"><div class="success"></div><p style="font-size: small; color: #fff; margin-bottom: 0;">' + res.msg + '</p><input type="submit" id="continuar" value="Aceptar" /></form>';
				document.getElementById('continuar').addEventListener('click', function(e){
					e.preventDefault();
					app.checkUser();
					});
				var floatDialog = document.getElementById('float_dialog');
				if(floatDialog.classList.contains('esperar_confirmacion')) {
					floatDialog.addEventListener('click', function(e){
						if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
							app.offDialog();
							} // end if
						}); // end function
				} // end if(floatDialog)
				}
			if(res.status == 2){ // Usuario no existe. Puede registrarse
				document.getElementById('loading').classList.remove('loading_active');
				document.getElementById('login').innerHTML = '<form name="registro_usuario" id="registro_usuario"><p class="form_section">Registro usuario</p><p>Rut</p><input type="text" id="rut_usuario" value="' + res.rut_usuario + '-' + res.dv_usuario + '" required /><p>Contraseña</p><input type="password" id="pass_usuario" required /><p>Nombre</p><input type="text" id="nom_usuario" required /><p>Apellido paterno</p><input type="text" id="ap_pat_usuario" required /><p>Apellido materno</p><input type="text" id="ap_mat_usuario" required /><p>Correo electrónico</p><input type="email" id="mail_usuario" name="mail_usuario" required/><p>Teléfono</p><input type="tel" id="tel_usuario" required /><input type="submit" value="Aceptar" id="submit_3" name="submit" class="submit" /><input type="reset" value="Volver" id="volver" name="volver" class="reset" /></form>';
				document.getElementById('registro_usuario').addEventListener('submit', function(e){
					e.preventDefault();
					var data = { 'rut_usuario' : res.rut_usuario , 'dv_usuario' : res.dv_usuario , 'pass_usuario' : document.getElementById('pass_usuario').value , 'nom_usuario' : document.getElementById('nom_usuario').value , 'ap_pat_usuario' : document.getElementById('ap_pat_usuario').value , 'ap_mat_usuario' : document.getElementById('ap_mat_usuario').value , 'mail_usuario' : document.getElementById('mail_usuario').value , 'tel_usuario' : document.getElementById('tel_usuario').value , 'sesion_key' : localStorage.getItem('sesion_key') , 'registro_usuario' : true };
					var url = 'https://www.arcos.cl/app_test4/admin/user/registro_usuario.php';
					app.sendPost(url, data, function(res){
						if(res.status == 1) {
							var class_result = 'success';
							localStorage.setItem('login', true);
							localStorage.setItem('rut_usuario', res.rut_usuario);
							localStorage.setItem('dv_usuario', res.dv_usuario);
							} // end if(res.status == 1)
						if(res.status == 2) {
							var class_result = 'error';
							} // end if(res.status == 2)
						document.getElementById('loading').classList.remove('loading_active');
						document.getElementById('float_dialog').classList.add('esperar_confirmacion');
						document.getElementById('float_dialog').innerHTML = '<form id="estado_registro"><div class="' + class_result + '"></div><p style="font-size: small; color: #fff; margin-bottom: 0;">' + res.msg + '</p><input type="submit" id="continuar" value="Aceptar" /></form>';
						document.getElementById('continuar').addEventListener('click', function(){
							app.getDataUser();
							}); // end function
						var floatDialog = document.getElementById('float_dialog');
						if(floatDialog.classList.contains('esperar_confirmacion')) {
							floatDialog.addEventListener('click', function(e){
								if (!document.querySelector('#float_dialog .clic_section').contains(e.target)){
									app.offDialog();
									} // end if
								}); // end function
						} // end if(floatDialog)
						}); // end sendPost
					}); // end submit
				} // end if(res.status == 2)
			}); // end sendPost
	},
		
		
	login: function(rutUsuario, dvUsuario, passUsuario){
		var passUsuario = document.getElementById('pass_usuario').value;
		var data = { 'rut_usuario': rutUsuario, 'dv_usuario': dvUsuario, 'pass_usuario': passUsuario,  'login': true };
		var url = 'https://www.arcos.cl/app_test4/admin/login/login_usuario.php';		
		app.sendPost(url,data,function(res){
			document.getElementById('loading').classList.remove('loading_active');
			if(res.status == 1){
				localStorage.setItem('login', true);
				localStorage.setItem('rut_usuario', res.rut_usuario);
				localStorage.setItem('dv_usuario', res.dv_usuario);
				localStorage.setItem('sesion_key', res.sesion_key);
				app.checkUser();
				} // end if res.status == 1
			else{
				document.getElementById('msg').innerHTML = '<p id="wrong_pass">' + res.msg + '</p><p id="get_pass">Recuperar contraseña</p>';
				document.getElementById('get_pass').addEventListener('click', function(){
					app.getPass();
				}); // end click
			} // end else
		}); // end app.sendPost()
	},
	
	logout: function(){
		var rut_usuario = localStorage.getItem('rut_usuario');
		var dv_usuario = localStorage.getItem('dv_usuario');
		localStorage.clear();
		var data = { 'rut_usuario' : rut_usuario , 'dv_usuario' : dv_usuario , 'sesion_key' : localStorage.getItem('sesion_key') , 'logout': true }
		var url = 'https://www.arcos.cl/app_test4/admin/login/logout_usuario.php';		
		app.sendPost(url,data,function(res){
			}); // end app.sendPost()
			setTimeout(function(){
				app.checkUser();
			}, 2000);
		},
		
	sendPost: function(url, data, callback){
		
		var loading = document.getElementById('loading');
		if(loading){
			loading.innerHTML = '<p></p>';
			loading.classList.add('loading_active');
			}
		
		function checkConnection() {
			var networkState = navigator.connection.type;
		 	if(networkState) {
				var states = {};
				states[Connection.UNKNOWN]  = 'Unknown connection';
				states[Connection.ETHERNET] = 'Ethernet connection';
				states[Connection.WIFI]     = 'WiFi connection';
				states[Connection.CELL_2G]  = 'Cell 2G connection';
				states[Connection.CELL_3G]  = 'Cell 3G connection';
				states[Connection.CELL_4G]  = 'Cell 4G connection';
				states[Connection.CELL]     = 'Cell generic connection';
				states[Connection.NONE]     = 'No network connection';
			 
				if(networkState == 'none'){
					loading.innerHTML = '';
					loading.classList.remove('loading_active');
					document.body.classList.remove('body_down');
					var floatDialog = document.getElementById('float_dialog');
					floatDialog.classList.add('esperar_confirmacion');
					floatDialog.innerHTML = '<form id="network_message"><div class="error"></div><p style="font-size: small; text-align: center; margin-bottom: 3px !important;">Red no disponible.<br>Por favor verifica tu conexión.</p><input type="submit" value="Aceptar"></form>';
					document.querySelector('#network_message').addEventListener('submit', function(e){
						e.preventDefault();
						app.checkUser();
						});
					} // end if
				} // end if(networkState)
		} // end function
		 
		checkConnection();
		
		setTimeout(function(){	
			var params = '';
			var count = Object.keys(data).length;
			for(var i=0; i<count;i++){
				if(i>0){
					params += '&';
				} // end if
				params += Object.keys(data)[i] + '=' + Object.values(data)[i];
			} // end for
			
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					var res = JSON.parse(xhr.responseText);
					if(callback && res.status != 9){
						callback(res);
						}
					else {
						localStorage.clear();
						app.checkUser();
						}
					}
				if(xhr.status != 200){
					if(loading){
						loading.innerHTML = '';
						loading.classList.remove('loading_active');
						} // end if
					document.body.classList.remove('body_down');
					var floatDialog = document.getElementById('float_dialog');
					if(floatDialog){
						floatDialog.classList.add('esperar_confirmacion');
						floatDialog.innerHTML = '<form id="network_message"><div class="error"></div><p style="font-size: small; text-align: center; margin-bottom: 3px !important;">Ha ocurrido un error.<br>Por favor intenta más tarde.</p><input type="submit" value="Aceptar"></form>';
						document.querySelector('#network_message').addEventListener('submit', function(e){
						e.preventDefault();
						app.checkUser();
						}); // end function
						} // end if
					} // end if(xhr.status != 200)
			};
			xhr.send(params);
		},500);
	},
	
		
	} // fin app




if ('addEventListener' in document) {
	document.addEventListener('deviceready',function() {
		app.checkUser();
		}, false);
	}