const reuse = new ReUseMl();
reuse.set('./components');

reuse.render('header.html', '#header');
reuse.render('signup.html', '#signup');
reuse.render('potato_facts.html', '#facts');
reuse.render('footer.html', '#footer');
